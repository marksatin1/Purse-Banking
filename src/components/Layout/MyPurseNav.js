import { useState, useContext, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from '../../context/AuthContext';

const MyPurseNav = () => {
  const [destination, setDestination] = useState({});

  const { signedIn, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (signedIn) {
      setDestination({ destUrl: '/my-purse/accounts', destName: 'My Purse' });
    } else if (!signedIn) {
      setDestination({ destUrl: '/register', destName: 'Register' });
    }
  }, [signedIn]);

  return (
    <Nav className='my-purse-nav'>
      <button className='my-purse-nav--btn'>
        <Nav.Link href={destination.destUrl}>
          <p>{destination.destName}</p>
        </Nav.Link>
      </button>
      {signedIn && (
        <div className='my-purse-nav--dropdown'>
          <Nav.Link href='/my-purse/debit-accounts?account=checking'>
            <p>Checking</p>
          </Nav.Link>
          <Nav.Link href='/my-purse/debit-accounts?account=savings'>
            <p>Savings</p>
          </Nav.Link>
          <Nav.Link href='/my-purse/credit-card-accounts'>
            <p>Credit Cards</p>
          </Nav.Link>
          <Nav.Link href='/my-purse/user-settings'>
            <p>My Settings</p>
          </Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link onClick={signOut}>
            <p className='sign-out'>Sign Out</p>
          </Nav.Link>
        </div>
      )}
    </Nav>
  );
};

export default MyPurseNav;
