import { useState, useContext, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from '../../context/auth-context';

const MyPurseButton = () => {
  const [destination, setDestination] = useState({});

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isSignedIn) {
      setDestination({ destUrl: '/my-purse/accounts', destName: 'My Purse' });
    } else if (!authCtx.isSignedIn) {
      setDestination({ destUrl: '/register', destName: 'Register' });
    }
  }, [authCtx]);

  return (
    <Nav className='my-purse-btn'>
      <button className='my-purse-btn--btn'>
        <Nav.Link href={destination.destUrl}>
          <p>{destination.destName}</p>
        </Nav.Link>
      </button>
      {authCtx.isSignedIn && (
        <div className='my-purse-btn--dropdown-content'>
          <Nav.Link href='accounts'>
            <p>My Accounts</p>
          </Nav.Link>
          <Nav.Link href='user-settings'>
            <p>User Settings</p>
          </Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link onClick={authCtx.signOut}>
            <p className='sign-out'>Sign Out</p>
          </Nav.Link>
        </div>
      )}
    </Nav>
  );
};

export default MyPurseButton;
