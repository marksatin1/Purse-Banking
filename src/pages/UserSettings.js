import { useState, useContext } from 'react';
import AuthContext from '../context/auth-context';

import axios from 'axios';
import { fbResetPasswordUrl } from '../helpers/data/ApiEndpoints';

import AccountPage from '../components/UI/Accounts/AccountPage';
import Table from 'react-bootstrap/Table';
import Modal from '../components/UI/General/Modal';

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const authCtx = useContext(AuthContext);

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  const password = localStorage.getItem('userPassword');
  let userPassword = showPassword ? password : <i>Hidden</i>;
  const country = localStorage.getItem('country');
  let userCountry = country === 'America' ? "'MERICA!" : 'FOREIGNER!!';

  const resetPasswordHandler = () => {
    axios({
      method: 'post',
      url: fbResetPasswordUrl,
      data: { requestType: 'PASSWORD_RESET', email: userEmail },
    }).catch((error) => {
      console.error(error);
    });

    setSuccess(true);
    setTimeout(() => {
      authCtx.signOut();
    }, 5000);
  };

  const showHide = showPassword ? 'Hide Password' : 'Show Password';

  return (
    <>
      {/* {modal && !success && (
        <Modal
          title='Reset Password'
          subtitle='Are you sure you want to reset your password?'
          content={
            <p className='content'>
              Click <b>Yes</b> to send a password reset link to your email
              account.
            </p>
          }
          button={
            <div className='yes'>
              <button type='button' onClick={resetPasswordHandler}>
                Yes
              </button>
            </div>
          }
          hideModal={() => setModal(false)}
        />
      )}
      {modal && success && (
        <Modal
          title='Success'
          content={
            <>
              <p className='content'>
                If you have previously registered with Purse a password reset
                link will appear in your inbox shortly.
                <br />
                <br />
                You will be redirected momentarily.
              </p>
            </>
          }
        />
      )} */}
      <AccountPage
        bannerImgName='bg-img--cops'
        pageTitle='Settings'
        slidebarPos='slidebar-pos--user-settings'
      >
        <div className='user-settings'>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{userName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{userEmail}</td>
              </tr>
              <tr>
                <th>Password</th>
                <td>{userPassword}</td>
              </tr>
              <tr>
                <th>Rights</th>
                <td>Ceded</td>
              </tr>
              <tr>
                <th>Firstborn?</th>
                <td>OURS NOW *evil laugh*</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{userCountry}</td>
              </tr>
            </tbody>
          </Table>
          <div className='d-flex flex-column align-items-center'>
            <button
              className='show-password'
              onClick={() => setShowPassword(() => !showPassword)}
            >
              {showHide}
            </button>
            <button className='reset-password' onClick={() => setModal(true)}>
              Reset Password
            </button>
          </div>
        </div>
      </AccountPage>
    </>
  );
};

export default UserSettings;
