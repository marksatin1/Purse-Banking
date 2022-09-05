import { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AmericanFlag from '../../assets/Emojis/US_Flag.webp';
import CaymansFlag from '../../assets/Emojis/CI_Flag.webp';
import SingaporeFlag from '../../assets/Emojis/SingFlag.webp';
import SwissFlag from '../../assets/Emojis/SwissFlag.webp';

const TopNav = () => {
  const [flag, setFlag] = useState(AmericanFlag);

  const selectFlagHandler = (event) => {
    const { nodeName, nextElementSibling, children } = event.target;

    let { src: flagImg } =
      nodeName === 'P'
        ? nextElementSibling
        : nodeName === 'IMG'
        ? event.target
        : nodeName === 'A'
        ? children[1]
        : null;

    setFlag(flagImg);
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
      <span>|</span>
      <Nav.Link>
        <img src={flag} className='dropdown-icon' alt='Country flag' />
      </Nav.Link>
      <NavDropdown className='d-none d-sm-block top-nav--dropdown' align='end'>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>America</p>
          <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Canada</p>
          <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Caymans</p>
          <img src={CaymansFlag} alt='Cayman Islands Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Guatemala</p>
          <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Singapore</p>
          <img src={SingaporeFlag} alt='Sigaporean Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Switzerland</p>
          <img src={SwissFlag} alt='Swiss Flag' />
        </NavDropdown.Item>
        <NavDropdown.Item
          className='d-flex align-items-center justify-content-between'
          onClick={selectFlagHandler}
        >
          <p>Venezuela</p>
          <img src={AmericanFlag} alt='American Flag' />
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default TopNav;
