import { useContext } from 'react';

import Nav from 'react-bootstrap/Nav';
import AuthContext from '../../../context/auth-context';

const MyPurseButton = () => {
  const authCtx = useContext(AuthContext);
  let destLink, destName;

  if (!authCtx.isSignedIn) {
    destLink = '/register';
    destName = 'Register';
  } else {
    destLink = 'my-purse/accounts';
    destName = 'My Purse';
  }

  return (
    <div className='d-flex justify-content-end'>
      <Nav className='my-purse-btn'>
        <Nav.Link href={destLink}>
          <p>{destName}</p>
        </Nav.Link>
        {authCtx.isSignedIn && (
          <div className='my-purse-btn--content-container'>
            <Nav.Link href='my-purse/accounts' className='link'>
              My Accounts
            </Nav.Link>
            <Nav.Link href='my-purse/user-settings' className='link'>
              User Settings
            </Nav.Link>
            <button className='btn--sign-out' onClick={authCtx.signOut}>
              Sign Out
            </button>
          </div>
        )}
      </Nav>
    </div>
  );
};

export default MyPurseButton;
