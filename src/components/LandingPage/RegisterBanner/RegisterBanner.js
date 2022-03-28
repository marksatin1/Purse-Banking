import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import MoneyMural from '../../../assets/Emojis/MoneyMural.webp';
import Moneybag from '../../../assets/Emojis/Moneybag.webp';

import classes from './RegisterBanner.module.css';

const RegisterBanner = () => {
  return (
    <Container className={classes['register-banner']}>
      <Row>
        <Col xs={12} md={6} className={classes.section}>
          <h1>Get in the bag today!</h1>
          <p>
            You know us. You love us. We're in your pocket, on your cellphone,
            in your thoughts, and on your mind!
            <br />
            <br />
            We're Planet Earth's Number One Supplier -- <b>PURSE!</b>
            <br />
            <br />
            For over 6000 years we've been serving you right where it counts --
            deep inside your pocket!
          </p>
          <div className={classes['money-mural']}>
            <img src={MoneyMural} alt='Money Mural' />
          </div>
        </Col>
        <Col xs={12} md={6} className={classes.section}>
          <Row>
            <Col
              xs={8}
              lg={6}
              className={`${classes.moneybags} d-none d-lg-block`}
            >
              <img src={Moneybag} alt='Da bag' />
              <img src={Moneybag} alt='Da bag' />{' '}
              <img src={Moneybag} alt='Da bag' />
            </Col>
            <Col
              xs={8}
              lg={6}
              className={`${classes.moneybags} d-none d-lg-block`}
            >
              <img src={Moneybag} alt='Da bag' />
              <img src={Moneybag} alt='Da bag' />
              <img src={Moneybag} alt='Da bag' />
            </Col>
          </Row>
          <p>
            Whether clams, cash, fatbacks, fat stacks, fat wads, bullion,
            dubloons, diamonds or just plain old fashioned solid gold bricks --
            we're your number one source for <b>PROTECTING</b> your assets and
            managing your <b>WEALTH</b>.
            <br />
            <br />
            If you're on your way back home you know what to do: sign in
            button's at the top left, dummy!
            <br />
            <br />
            If this is your first time here: Where the H-E-Double-Hockey-Sticks
            have you been for the last 6000 years!?!?
          </p>
          <Row className={classes['register-container']}>
            <Col xs={12} lg={{ span: 4, offset: 1 }}>
              <h2>Hurry up and</h2>
            </Col>
            <Col xs={12} lg={4}>
              <Link to='/register'>
                <button type='button'>REGISTER!!!!</button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterBanner;
