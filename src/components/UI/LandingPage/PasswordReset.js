import { useState, useRef } from 'react';

import { validateEmail } from '../../../helpers/functions/FormValidationFunctions';
import { resetPassword } from '../../../helpers/functions/ApiFunctions';

import FormButton from '../General/FormButton';

const PasswordReset = ({ setShowReset }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const emailRef = useRef();

  const passwordResetHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    resetPassword(email);
    setShowSuccess(true);
  };

  const emailValidationHandler = (event) => {
    const { value } = event.target;
    const validStatus = validateEmail(value);

    if (validStatus === true) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
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
            placeholder='Email address'
            name='resetInput'
            type='email'
            autoComplete='email'
            onChange={emailValidationHandler}
            ref={emailRef}
          />
          <FormButton type='submit' name='Reset' disabled={disabledBtn} />
          <p className='pass-reset--link' onClick={() => setShowReset(false)}>
            Return to Sign In
          </p>
        </>
      )}
      {showSuccess && (
        <>
          <h2 className='pass-reset--title'>Success</h2>
          <p className='pass-reset--body'>
            If you have previously registered with Purse a password reset link
            will appear in your inbox shortly.
          </p>
          <p className='pass-reset--link' onClick={() => setShowReset(false)}>
            Return to Sign In
          </p>
        </>
      )}
    </form>
  );
};

export default PasswordReset;
