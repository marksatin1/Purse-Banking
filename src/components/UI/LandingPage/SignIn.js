import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth-context';

import { fbGetSecureToken } from '../../../helpers/functions/ApiFunctions';
import { fbSignInUrl } from '../../../api/endpoints';
import { Sleep } from '../../../helpers/functions/MiscFunctions';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormButton from '../General/FormButton';
import PasswordReset from './PasswordReset';

// If passwords don't match then user is updating password
// if (thisUser[0].password !== password) {
//   axios.patch(fbUsersUrl + thisUser[0].id + '.json', {
//     body: JSON.stringify({
//       password,
//     }),
//   });
// }

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const authCtx = useContext(AuthContext);

  // Handle Sign In button 'disabled' attribute
  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  // Authenticate user and sign in to personal account
  const submitHandler = (event) => {
    event.preventDefault();

    fbGetSecureToken(fbSignInUrl, email, password)
      .then((signInCreds) => {
        authCtx.signIn(signInCreds);
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
