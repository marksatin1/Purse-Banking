import { useState } from 'react';

import { validateEmail } from '../../../helpers/functions/FormValidationFunctions';

import FormButton from '../General/FormButton';

const axios = require('axios');

const PasswordReset = ({ setShowReset }) => {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const resetInputChangeHandler = (event) => {
    const timer = setTimeout(async () => {
      const { name, value } = event.target;

      if (!value || validateEmail(value)) {
        formErrors[name] = "We're gonna need a valid email here, bud";
      } else {
        delete formErrors[name];
        setIsDisabled(false);
      }

      setEmail(value);
      setFormErrors(formErrors);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  };

  const passwordResetHandler = (event) => {
    event.preventDefault();

    axios
      .post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode', {
        params: {
          key: process.env.REACT_APP_FIREBASE_API_KEY,
        },
        headers: {
          'X-Firebase-Locale': 'en-US',
        },
        body: JSON.stringify({
          requestType: 'PASSWORD_RESET',
          email: email,
        }),
      })
      .catch((error) => {
        console.error(error.message);
      });
    setShowSuccess(true);
  };

  return (
    <form className='pass-reset' onSubmit={passwordResetHandler}>
      {!showSuccess && (
        <>
          <h1 className='pass-reset--title'>Reset Password</h1>
          <p className='pass-reset--body'>
            Please enter your email below to reset your password.
          </p>
          <input
            placeholder='Enter email'
            name='resetInput'
            type='email'
            autoComplete='email'
            noValidate
            onChange={resetInputChangeHandler}
          />
          {formErrors.resetInput && (
            <p className='error'>{formErrors.resetInput}</p>
          )}
          <FormButton type='submit' name='Reset' disabled={isDisabled} />
          <p className='link' onClick={() => setShowReset(false)}>
            Return to Sign In
          </p>
        </>
      )}
      {showSuccess && (
        <>
          <h2 className='title'>Success</h2>
          <p className='body'>
            If you have previously registered with Purse a password reset link
            will appear in your inbox shortly.
          </p>
          <p className='return' onClick={() => setShowReset(false)}>
            Return to Sign In
          </p>
        </>
      )}
    </form>
  );
};

export default PasswordReset;
