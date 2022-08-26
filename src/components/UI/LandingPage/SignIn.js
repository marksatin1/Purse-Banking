import { useState, useContext, useEffect } from 'react';
import { Form, Nav } from 'react-bootstrap';
import AuthContext from '../../../context/auth-context';

import { Sleep } from '../../../helpers/functions/MiscFunctions';

import FormButton from '../General/FormButton';
import PasswordReset from './PasswordReset';

const axios = require('axios');

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true); ///
  const [httpError, setHttpError] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const submitHandler = (event) => {
    event.preventDefault();

    let idToken, expirationTime;

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        {
          params: {
            key: process.env.REACT_APP_FIREBASE_API_KEY,
          },
          body: JSON.stringify({
            email,
            password,
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

            const thisUser = loadedUsers.filter((user) => user.email === email);

            localStorage.setItem('displayName', thisUser[0].firstName);
            localStorage.setItem('userPassword', password);

            // If passwords don't match then user is updating password
            if (thisUser[0].password !== password) {
              axios.patch(
                `https://react-http-841ed-default-rtdb.firebaseio.com/users/${thisUser[0].id}.json`,
                {
                  body: JSON.stringify({
                    password,
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
        await Sleep(2000);
        setHttpError(false);
      });
  };

  return (
    <div className='d-flex flex-column align-items-center sign-in'>
      {!showReset && !httpError && (
        <>
          <h1 className='sign-in--title'>Get In There Already!!</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='formEmail'>
              <Form.Control
                type='email'
                placeholder='Email address'
                autoComplete='email'
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='formPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                autoComplete='password'
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <FormButton type='submit' name='Sign In' disabled={isDisabled} />
          </Form>
          <Nav className='d-flex flex-column sign-in--nav'>
            <Nav.Item>
              <p>New? Don't forget to</p>
              <a href='/register' className='sign-in--nav-link'>
                <p>REGISTER!</p>
              </a>
            </Nav.Item>
            <Nav.Item>
              <p>Lost credentials?</p>
              <p
                className='sign-in--nav-link'
                onClick={() => setShowReset(true)}
              >
                Click Here
              </p>
            </Nav.Item>
            <Nav.Item>
              <p>Security, privacy,</p>
              <a href='/privacy' className='sign-in--nav-link'>
                <p>etc., etc.</p>
              </a>
            </Nav.Item>
          </Nav>
          <a href='/find-branch'>
            <button className='branch-btn'>Find your local branch</button>
          </a>
        </>
      )}
      {showReset && <PasswordReset setShowReset={setShowReset} />}
      {httpError && (
        <div className='error'>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
          <p>USER CREDENTIALS NOT FOUND!!!!!</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
