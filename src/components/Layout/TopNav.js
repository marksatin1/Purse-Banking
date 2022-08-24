import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import AmericanFlag from '../../assets/Emojis/US_Flag.webp';
import CaymansFlag from '../../assets/Emojis/CI_Flag.webp';
import SingaporeFlag from '../../assets/Emojis/SingFlag.webp';
import SwissFlag from '../../assets/Emojis/SwissFlag.webp';

const TopNav = () => {
  const [flag, setFlag] = useState(AmericanFlag);
  const [isOpen, setIsOpen] = useState(false);

  const selectFlagHandler = (event) => {
    setFlag(event.target.children[0].src);
    setIsOpen(false);
  };

  return (
    <Nav className='d-flex flex-row align-items-center top-nav'>
      <Nav.Link href='/about'>
        <h5>About</h5>
      </Nav.Link>
      <span>|</span>
      <Nav.Link href='/contact'>
        <h5>Contact</h5>
      </Nav.Link>
      <span>|</span>
      <Nav.Link href='/languages'>
        <h5>Languages</h5>
      </Nav.Link>
      <span>|</span>
      <Nav.Link href='/help'>
        <h5>Help</h5>
      </Nav.Link>
      {/* <span>|</span>
      <Nav.Link>
        <img src={flag} className='dropdown-icon' alt='Country flag' />
      </Nav.Link>
      <NavDropdown
        className='top-nav--dropdown'
        show={isOpen}
        onMouseEnter={() => setIsOpen(true)}
      >
        <NavDropdown.Item onClick={selectFlagHandler}>
          America <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Canada <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Cayman Islands <img src={CaymansFlag} alt='Cayman Islands Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Guatemala <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Singapore <img src={SingaporeFlag} alt='Sigaporean Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Switzerland <img src={SwissFlag} alt='Swiss Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item onClick={selectFlagHandler}>
          Venezuela <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  );
};

export default TopNav;
