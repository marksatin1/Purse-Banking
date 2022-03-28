import { Fragment } from 'react';
import { Container, Row, Navbar } from 'react-bootstrap';

import Moneybag from '../../../assets/Emojis/Moneybag-small.webp';

import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';
import MyPurseButton from './MyPurseButton';
import Logo from './Logo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <Container fluid className={`d-none d-md-block ${classes.header}`}>
        <Row>
          <TopNavBar />
          <MainNavBar />
          <MyPurseButton />
          <Logo />
        </Row>
      </Container>
      <Navbar
        expand='md'
        defaultExpanded
        className={`d-md-none ${classes.header}`}
      >
        {/* <Navbar.Brand>
          <p className={classes.motto}>
            Keeping Eyes On Your Bag For Over 6000 Years!
          </p>
        </Navbar.Brand> */}
        <Navbar.Toggle className={`ms-auto ${classes.toggle}`}>
          <img src={Moneybag} alt='Moneybag icon' />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Container fluid>
            <Row>
              <TopNavBar />
              <MainNavBar />
              <MyPurseButton />
              <Logo />
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
