import { useState, useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import AuthContext from '../../../../context/auth-context';

import { Sleep } from '../../../../helpers/Helpers';

import FormButton from '../../../UI/FormButton';
import PasswordReset from './PasswordReset';
import classes from './SignIn.module.css';

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

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          if (data.error.message) {
            throw new Error(data.error.message);
          }
        }
      })
      .then((data) => {
        localStorage.setItem('userEmail', data.email);
        idToken = data.idToken;
        expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
      })
      .then(() => {
        fetch('https://react-http-841ed-default-rtdb.firebaseio.com/users.json')
          .then(async (response) => {
            if (response.ok) {
              return response.json();
            } else {
              const data = await response.json();
              if (data.error.message) {
                throw new Error(data.error.message);
              }
            }
          })
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
            console.log(userPassword);

            localStorage.setItem('displayName', thisUser[0].firstName);
            localStorage.setItem('userPassword', userPassword);

            if (thisUser[0].password !== userPassword) {
              fetch(
                `https://react-http-841ed-default-rtdb.firebaseio.com/users/${thisUser[0].id}.json`,
                {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
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
        console.log(error);
        await Sleep(1500);
        setHttpError(false);
      });
  };

  return (
    <div className={classes.form}>
      {showReset && <PasswordReset setShowReset={setShowReset} />}
      {httpError && (
        <div className={classes.error}>
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
      )}
      <form noValidate onSubmit={submitHandler}>
        {!showReset && !httpError && (
          <Stack gap={2}>
            <input
              placeholder='Email'
              type='email'
              name='email'
              autoComplete='current-email'
              ref={emailRef}
              noValidate
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              placeholder='Password'
              type='password'
              name='password'
              autoComplete='current-password'
              ref={passwordRef}
              noValidate
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className={classes['sign-in__button']}>
              <FormButton type='submit' name='Sign In' disabled={isDisabled} />
            </div>
            <div className={classes.links}>
              <p>New?? Don't forget to </p>
              <p>
                <Link className='link' to='/register'>
                  REGISTER!
                </Link>
              </p>
              <p>Lost credentials? </p>
              <p className='link' onClick={() => setShowReset(true)}>
                Click Here
              </p>
              <p>Security, privacy, </p>
              <p>
                <Link className='link' to='/privacy'>
                  etc., etc.
                </Link>
              </p>
            </div>
            <Link to='/find-branch'>
              <button className={classes['branch-button']} type='button'>
                Find your local branch
              </button>
            </Link>
          </Stack>
        )}
      </form>
    </div>
  );
};

export default SignIn;
