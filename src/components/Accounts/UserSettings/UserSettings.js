import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth-context';

import PageCard from '../../UI/PageCard';
import Modal from '../../UI/Modal';
import classes from './UserSettings.module.css';

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const authCtx = useContext(AuthContext);

  const username = localStorage.getItem('userName');
  const email = localStorage.getItem('userEmail');
  const password = showPassword
    ? localStorage.getItem('userPassword')
    : 'Hidden';
  const country = localStorage.getItem('country');

  const resetPasswordHandler = () => {
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
    setTimeout(() => {
      authCtx.signOut();
    }, 5000);
  };

  const showHide = showPassword ? 'Hide Password' : 'Show Password';

  return (
    <div>
      {showModal && !showSuccess && (
        <Modal
          title='Reset Password'
          subtitle='Are you sure you want to reset your password?'
          content={
            <p className={classes.content}>
              Click <b>Yes</b> to send a password reset link to your email
              account.
            </p>
          }
          button={
            <div className={classes.yes}>
              <button type='button' onClick={resetPasswordHandler}>
                Yes
              </button>
            </div>
          }
          hideModal={() => setShowModal(false)}
        />
      )}
      {showModal && showSuccess && (
        <Modal
          title='Success'
          content={
            <>
              <p className={classes.content}>
                If you have previously registered with Purse a password reset
                link will appear in your inbox shortly.
                <br />
                <br />
                You will be redirected momentarily.
              </p>
            </>
          }
        />
      )}
      <PageCard
        title='User Settings'
        subtitle='Who do you think you are anyway?'
      >
        <div className={classes.layout}>
          <div>
            <h3>Name</h3>
            <p>{username}</p>
          </div>
          <div>
            <h3>Country</h3>
            <p>{country}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{email}</p>
          </div>
          <div>
            <h3>Password</h3>
            <p>{password}</p>
          </div>
          <div className={classes.buttons}>
            <button
              type='button'
              className={classes.purple}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showHide}
            </button>
            <button
              type='button'
              className={classes.gold}
              onClick={() => setShowModal(true)}
            >
              Reset Password
            </button>
          </div>
        </div>
      </PageCard>
    </div>
  );
};

export default UserSettings;
