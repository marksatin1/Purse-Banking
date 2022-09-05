import { useState } from 'react';

import AccountPage from '../components/UI/Accounts/AccountPage';
import Table from 'react-bootstrap/Table';
import ResetPassModal from '../components/UI/General/ResetPassModal';

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [resetModal, setResetModal] = useState(false);

  const userName = localStorage.getItem('name');
  const userEmail = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const country = localStorage.getItem('country');
  let displayPass = showPassword ? <i>{password}</i> : 'Hidden';
  let displayCountry = country === 'America' ? "'MERICA!" : 'FOREIGNER!!';

  let showHide = showPassword ? 'Hide Password' : 'Show Password';

  return (
    <>
      <AccountPage
        bannerImgName='bg-img--cops'
        pageTitle='My Settings'
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
            <button
              className='reset-password'
              onClick={() => setResetModal(true)}
            >
              Reset Password
            </button>
          </div>
        </div>
      </AccountPage>
      {resetModal && (
        <ResetPassModal
          hideModalHandler={() => setResetModal(false)}
          email={userEmail}
        />
      )}
    </>
  );
};

export default UserSettings;
