import { Container, Row, Navbar } from 'react-bootstrap';

import Handbag from '../../assets/Emojis/Handbag.webp';

import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';
import MyPurseButton from '../UI/General/MyPurseButton';
import Logo from '../UI/General/Logo';

const Header = () => {
  return (
    <>
      <Container fluid className='d-none d-md-block header'>
        <Row>
          <TopNavBar />
          <MainNavBar />
          <MyPurseButton />
          <Logo />
        </Row>
      </Container>
      <Container fluid className='d-md-none header'>
        <Logo />
        <Navbar expand='md'>
          <Navbar.Toggle className='toggle'>
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
