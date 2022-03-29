import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './MainNavBar.module.css';

const MainNavBar = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={11}
          md={{ span: 12, offset: 3 }}
          lg={{ offset: 4 }}
          xl={{ offset: 5 }}
          xxl={{ offset: 7 }}
          className={classes.centered}
        >
          <Row className={classes['main-nav']}>
            <Col xs={'auto'} className={classes['nav-dropdown']}>
              <h2>Learning</h2>
              <div className={classes['dropdown-content']}>
                <Link
                  className={`${classes.link} ${classes['no-strike']}`}
                  to='/crypto'
                >
                  Crypto
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  NFTs
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Finance 101
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Joint Bank Accounts
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Digital Payments
                </Link>
              </div>
            </Col>
            <Col xs={'auto'} className={classes['nav-dropdown']}>
              <h2>Services</h2>
              <div className={classes['dropdown-content']}>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Mobile Banking
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Student Checking
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Travel Tips
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Overdraft Services
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  New to Purse
                </Link>
              </div>
            </Col>
            <Col xs={'auto'} className={classes['nav-dropdown']}>
              <h2>Products</h2>
              <div className={classes['dropdown-content']}>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  CDs
                </Link>
                <Link
                  className={`${classes.link} ${classes['no-strike']}`}
                  to='/credit-offer?card=travel-card'
                >
                  Credit Cards
                </Link>
                <Link
                  className={`${classes.link} ${classes['no-strike']}`}
                  to='/cyber-incident-2021'
                >
                  Crypto Wallet
                </Link>
                <Link className={`${classes.link} ${classes.strike}`} to='#'>
                  Stock Wallet
                </Link>
              </div>
            </Col>
            {/* <Col>
              <Nav>
                <NavDropdown title='Test'>
                  <NavDropdown.Item>Test 1</NavDropdown.Item>
                  <NavDropdown.Item>Test 2</NavDropdown.Item>
                  <NavDropdown.Item>Test 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainNavBar;
