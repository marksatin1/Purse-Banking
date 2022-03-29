import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import AmericanFlag from '../../../assets/Emojis/US_Flag.webp';
import CaymansFlag from '../../../assets/Emojis/CI_Flag.webp';
import SingaporeFlag from '../../../assets/Emojis/SingFlag.webp';
import SwissFlag from '../../../assets/Emojis/SwissFlag.webp';

import classes from './TopNavBar.module.css';

const blockDisplay = {
  display: 'block',
};

const noDisplay = {
  display: 'none',
};

const TopNavBar = () => {
  const [flag, setFlag] = useState(AmericanFlag);
  const [showDropdown, setShowDropdown] = useState(true);
  const [dropdownClasses, setDropdownClasses] = useState();

  const selectFlagHandler = (event) => {
    setFlag(event.target.children[0].src);
    setShowDropdown(false);
  };

  useEffect(() => {
    const displayClasses = `${classes['dropdown-container']} ${
      showDropdown ? blockDisplay : noDisplay
    }`;
    setDropdownClasses(displayClasses);
  }, [showDropdown]);

  return (
    <Container>
      <Row>
        <Col className={classes['top-nav']}>
          <Nav.Link href='/about'>About</Nav.Link>
          <span>|</span>
          <Nav.Link href='/contact'>Contact</Nav.Link>
          <span>|</span>
          <Nav.Link href='/languages'>Languages</Nav.Link>
          <span>|</span>
          <Nav.Link href='/help'>Help</Nav.Link>
          <span>|</span>
          <div
            className={classes.dropdown}
            onMouseEnter={() => setShowDropdown(true)}
          >
            <img src={flag} alt='Country flag' />
            {showDropdown && (
              <div className={dropdownClasses}>
                <div onClick={selectFlagHandler}>
                  America
                  <img src={AmericanFlag} alt='American Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Canada
                  <img src={AmericanFlag} alt='Canadian Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Cayman Islands
                  <img src={CaymansFlag} alt='Caymans Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Guatemala
                  <img src={AmericanFlag} alt='Guatemalan Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Singapore
                  <img src={SingaporeFlag} alt='Singaporean Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Switzerland
                  <img src={SwissFlag} alt='Swiss Flag' />
                </div>
                <div onClick={selectFlagHandler}>
                  Venezuela
                  <img src={AmericanFlag} alt='Venezuelan Flag' />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavBar;
