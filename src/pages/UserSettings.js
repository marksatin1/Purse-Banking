import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

import axios from 'axios';
import { fbResetPasswordUrl } from '../helpers/data/ApiEndpoints';

import AccountPage from '../components/UI/Accounts/AccountPage';
import Table from 'react-bootstrap/Table';
import Modal from '../components/UI/General/Modal';

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const { signOut } = useContext(AuthContext);

  const userName = localStorage.getItem('name');
  const userEmail = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const country = localStorage.getItem('country');
  let displayPass = showPassword ? password : 'Hidden';
  let displayCountry = country === 'America' ? "'MERICA!" : 'FOREIGNER!!';

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
      signOut();
    }, 5000);
  };

  let showHide = showPassword ? 'Hide Password' : 'Show Password';

  return (
    <>
      {modal && !success && (
        <Modal title='Reset Password' hideModalHandler={() => setModal(false)}>
          <div className='reset-password--content'>
            <p>
              If you would like to reset your password click the button below.
            </p>
            <button onClick={resetPasswordHandler}>Yes</button>
          </div>
        </Modal>
      )}
      {modal && success && (
        <Modal title='Success'>
          <p>
            If you have previously registered with Purse a password reset link
            will appear in your inbox shortly.
          </p>
          <p>You will be redirected momentarily.</p>
        </Modal>
      )}
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
                <td>{displayPass}</td>
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
                <td>{displayCountry}</td>
              </tr>
            </tbody>
          </Table>
          <div className='d-flex flex-column align-items-center'>
            <button
              className='show-password'
              onClick={() => setShowPassword((prev) => !prev)}
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
