import { useState } from 'react';
import { validateEmail } from '../../../helpers/functions/FormValidationFunctions';

import FormButton from '../General/FormButton';

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

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Firebase-Locale': 'en-US',
        },
        body: JSON.stringify({
          requestType: 'PASSWORD_RESET',
          email: email,
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
      .catch((error) => {
        console.log(error);
      });
    setShowSuccess(true);
  };

  return (
    <form className='form' onSubmit={passwordResetHandler}>
      {!showSuccess && (
        <>
          <h1 className='title'>Reset Password</h1>
          <p className='body'>
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
          <div className='reset'>
            <FormButton type='submit' name='Reset' disabled={isDisabled} />
          </div>
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
