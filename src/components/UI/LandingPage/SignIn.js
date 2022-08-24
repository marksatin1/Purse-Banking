import { useState, useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Nav } from 'react-bootstrap';
import AuthContext from '../../../context/auth-context';

import { Sleep } from '../../../helpers/functions/MiscFunctions';

import FormButton from '../General/FormButton';
import PasswordReset from './PasswordReset';

const axios = require('axios');

let idToken, expirationTime;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const submitHandler = (event) => {
    event.preventDefault();

    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        {
          params: {
            key: process.env.REACT_APP_FIREBASE_API_KEY,
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            returnSecureToken: true,
          }),
        }
      )
      .then((response) => {
        localStorage.setItem('userEmail', response.email);
        idToken = response.idToken;
        expirationTime = new Date(
          new Date().getTime() + +response.expiresIn * 1000
        );
      })
      .then(() => {
        axios
          .get(
            'https://react-http-841ed-default-rtdb.firebaseio.com/users.json'
          )
          .then((data) => {
            const loadedUsers = [];

            for (const key in data) {
              loadedUsers.push({
                id: key,
                firstName: data[key].firstName,
                email: data[key].email,
                password: data[key].password,
              });
            }

            const thisUser = loadedUsers.filter(
              (user) => user.email === userEmail
            );

            localStorage.setItem('displayName', thisUser[0].firstName);
            localStorage.setItem('userPassword', userPassword);

            if (thisUser[0].password !== userPassword) {
              axios.patch(
                `https://react-http-841ed-default-rtdb.firebaseio.com/users/${thisUser[0].id}.json`,
                {
                  body: JSON.stringify({
                    password: userPassword,
                  }),
                }
              );
            }

            authCtx.signIn(idToken, expirationTime.toISOString());
          });
      })
      .catch(async (error) => {
        setHttpError(true);
        console.error(error.message);
        await Sleep(1500);
        setHttpError(false);
      });
  };

  return (
    <div className='d-flex flex-column align-items-center sign-in'>
      {!showReset && !httpError && (
        <>
          <h1 className='sign-in--title'>Get In There Already!!</h1>
          <Form>
            <Form.Group controlId='formEmail'>
              <Form.Control
                type='email'
                placeholder='Email address'
                autoComplete='email'
              />
            </Form.Group>
            <Form.Group controlId='formPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                autoComplete='password'
              />
            </Form.Group>
            <FormButton type='submit' name='Sign In' disabled={isDisabled} />
          </Form>
          <Nav className='d-flex flex-column sign-in--nav'>
            <Nav.Item>
              <p>New? Don't forget to </p>
              <Nav.Link className='link' href='/register'>
                <p>REGISTER!</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <p>Lost credentials? </p>
              <p className='link' onClick={() => setShowReset(true)}>
                Click Here
              </p>
            </Nav.Item>
            <Nav.Item>
              <p>Security, privacy, </p>
              <Nav.Link className='link' href='/privacy'>
                <p>etc., etc.</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Link to='/find-branch'>
            <button className='branch-btn'>Find your local branch</button>
          </Link>
        </>
      )}
      {showReset && <PasswordReset setShowReset={setShowReset} />}
      {/* {httpError && (
        <div className='error'>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
        </div>
      )} */}
    </div>
  );
};

export default SignIn;
