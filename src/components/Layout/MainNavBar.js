import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

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
          className='centered'
        >
          <Row className='main-nav'>
            <Col xs={'auto'} className='nav-dropdown'>
              <h2>Learning</h2>
              <div className='dropdown-content'>
                <Link className='link no-strike' to='/crypto'>
                  Crypto
                </Link>
                <Link className='link strike' to='#'>
                  NFTs
                </Link>
                <Link className='link strike' to='#'>
                  Finance 101
                </Link>
                <Link className='link strike' to='#'>
                  Joint Bank Accounts
                </Link>
                <Link className='link strike' to='#'>
                  Digital Payments
                </Link>
              </div>
            </Col>
            <Col xs={'auto'} className='nav-dropdown'>
              <h2>Services</h2>
              <div className='dropdown-content'>
                <Link className='link strike' to='#'>
                  Mobile Banking
                </Link>
                <Link className='link strike' to='#'>
                  Student Checking
                </Link>
                <Link className='link strike' to='#'>
                  Travel Tips
                </Link>
                <Link className='link strike' to='#'>
                  Overdraft Services
                </Link>
                <Link className='link strike' to='#'>
                  New to Purse
                </Link>
              </div>
            </Col>
            <Col xs={'auto'} className='nav-dropdown'>
              <h2>Products</h2>
              <div className='dropdown-content'>
                <Link className='link strike' to='#'>
                  CDs
                </Link>
                <Link
                  className='link no-strike'
                  to='/credit-offer?card=travel-card'
                >
                  Credit Cards
                </Link>
                <Link className='link no-strike' to='/cyber-incident-2021'>
                  Crypto Wallet
                </Link>
                <Link className='link strike' to='#'>
                  Stock Wallet
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainNavBar;
