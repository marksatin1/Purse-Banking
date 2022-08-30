import { useState, useContext, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import AuthContext from '../../context/auth-context';

const MyPurseButton = () => {
  const [destination, setDestination] = useState({});

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isSignedIn) {
      setDestination({ destUrl: '/accounts', destName: 'My Purse' });
    } else if (!authCtx.isSignedIn) {
      setDestination({ destUrl: '/register', destName: 'Register' });
    }
  }, [authCtx]);

  return (
    <div className='d-flex justify-content-end'>
      <Nav className='my-purse-btn'>
        <Nav.Link href={destination.destUrl}>
          <p>{destination.destName}</p>
        </Nav.Link>
        {authCtx.isSignedIn && (
          <div className='my-purse-btn--content-container'>
            <Nav.Link href='accounts' className='link'>
              My Accounts
            </Nav.Link>
            <Nav.Link href='user-settings' className='link'>
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
