import { Container, Row, Navbar } from 'react-bootstrap';

import Handbag from '../../assets/Emojis/Handbag.webp';

import TopNav from './TopNav';
import MainNav from './MainNav';
import MyPurseButton from '../UI/General/MyPurseButton';
import Logo from '../UI/General/Logo';

const Header = () => {
  return (
    <Navbar fixed='top' className='d-flex flex-column header'>
      <TopNav />
      <MainNav />
      <MyPurseButton />
      <Logo />
    </Navbar>
    /*{' '}
      <Row className='d-md-none header'>
        <Logo />
        <Navbar expand='md'>
          <Navbar.Toggle className='toggle'>
            <img src={Handbag} alt='Moneybag icon' />
          </Navbar.Toggle>
          <Navbar.Collapse>
            <TopNav />
            <MainNav />
            <MyPurseButton />
          </Navbar.Collapse>
        </Navbar>
      </Row>*/
  );
};

export default Header;
