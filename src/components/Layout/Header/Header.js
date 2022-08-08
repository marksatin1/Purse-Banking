import { Container, Row, Navbar } from 'react-bootstrap';

import Handbag from '../../../assets/Emojis/Handbag.webp';

import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';
import MyPurseButton from './MyPurseButton';
import Logo from './Logo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <Container fluid className={`d-none d-md-block ${classes.header}`}>
        <Row>
          <TopNavBar />
          <MainNavBar />
          <MyPurseButton />
          <Logo />
        </Row>
      </Container>
      <Container fluid className={`d-md-none ${classes.header}`}>
        <Logo />
        <Navbar expand='md'>
          <Navbar.Toggle className={classes.toggle}>
            <img src={Handbag} alt='Moneybag icon' />
          </Navbar.Toggle>
          <Navbar.Collapse>
            <TopNavBar />
            <MainNavBar />
            <MyPurseButton />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
