import { Fragment, useState } from 'react';
import { validateEmail } from '../../../../helpers/FormValidation';

import FormButton from '../../../UI/FormButton';
import classes from './PasswordReset.module.css';

const PasswordReset = (props) => {
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
    <form className={classes.form} onSubmit={passwordResetHandler}>
      {!showSuccess && (
        <Fragment>
          <h1 className={classes.title}>Reset Password</h1>
          <p className={classes.body}>
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
            <p className={classes.error}>{formErrors.resetInput}</p>
          )}
          <div className={classes.reset}>
            <FormButton type='submit' name='Reset' disabled={isDisabled} />
          </div>
          <p className='link' onClick={() => props.setShowReset(false)}>
            Return to Sign In
          </p>
        </Fragment>
      )}
      {showSuccess && (
        <Fragment>
          <h2 className={classes.title}>Success</h2>
          <p className={classes.body}>
            If you have previously registered with Purse a password reset link
            will appear in your inbox shortly.
          </p>
          <p
            className={classes.return}
            onClick={() => props.setShowReset(false)}
          >
            Return to Sign In
          </p>
        </Fragment>
      )}
    </form>
  );
};

export default PasswordReset;
