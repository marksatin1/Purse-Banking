import { useContext } from 'react';
import { Nav } from 'react-bootstrap';

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
    <div className='d-flex justify-content-end purse-btn--container'>
      <Nav>
        <Nav.Link href={destLink} className='purse-btn'>
          <p>{destName}</p>
        </Nav.Link>
        {authCtx.isSignedIn && (
          <div className='purse-btn--content-container'>
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
