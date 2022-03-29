import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

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
    const displayClasses = `${classes['dropdown-content']} ${
      showDropdown ? blockDisplay : noDisplay
    }`;
    setDropdownClasses(displayClasses);
  }, [showDropdown]);

  return (
    <Container>
      <Row>
        <Col className={classes['flex-end']}>
          <div className={classes['top-nav']}>
            <Link to='/about'>
              <button type='button'>About</button>
            </Link>
            <span>|</span>
            <Link to='contact'>
              <button type='button'>Contact</button>
            </Link>
            <span>|</span>
            <Link to='/languages'>
              <button type='button'>Languages</button>
            </Link>
            <span>|</span>
            <Link to='/help'>
              <button type='button'>Help</button>
            </Link>
            <span>|</span>
            <button
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
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavBar;
