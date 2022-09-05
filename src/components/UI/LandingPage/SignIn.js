import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/AuthContext';

import { fbSignInUrl } from '../../../helpers/data/ApiEndpoints';
import { getNewTokenData } from '../../../helpers/functions/ApiFunctions';
import { Sleep } from '../../../helpers/functions/MiscFunctions';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormButton from '../General/FormButton';
import PasswordReset from './PasswordReset';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [passReset, setPassReset] = useState(false);

  const { signIn } = useContext(AuthContext);

  // Handle Sign In button 'disabled' attribute
  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  // Authenticate user and sign in to personal account
  const submitHandler = async (event) => {
    event.preventDefault();

    const signInCreds = await getNewTokenData(fbSignInUrl, email, password);

    if (signInCreds === null) {
      setHttpError(true);
      await Sleep(2000);
      setHttpError(false);
    } else {
      signIn(signInCreds);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center sign-in'>
      {!passReset && !httpError && (
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
                onClick={() => setPassReset(true)}
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
      {passReset && <PasswordReset setShowReset={setPassReset} />}
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
