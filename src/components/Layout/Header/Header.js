import { Container, Row } from 'react-bootstrap';

import TopNavBar from './TopNavBar';
import MainNavBar from './MainNavBar';
import MyPurseButton from './MyPurseButton';
import Logo from './Logo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Container fluid className={classes.header}>
      <Row>
        <TopNavBar />
        <MainNavBar />
        <MyPurseButton />
        <Logo />
      </Row>
    </Container>
  );
};

export default Header;
