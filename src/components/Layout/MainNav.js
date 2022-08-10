import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <div className='d-flex justify-content-end'>
      <Nav className='main-nav'>
        <Nav.Item className='main-nav--item'>
          <h2>Learning</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link no-strike' to='/crypto'>
              Crypto
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              NFTs
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Finance 101
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Joint Bank Accounts
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Digital Payments
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Services</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link strike' to='#'>
              Mobile Banking
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Student Checking
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Travel Tips
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Overdraft Services
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              New to Purse
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Products</h2>
          <div className='main-nav--dropdown-content'>
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
        </Nav.Item>
      </Nav>
    </div>
    // <Container className='d-flex justify-content-end'>
    //   <Row className='main-navbar'>
    //     <Col xs={'auto'} className='main-navbar--dropdown'>
    //       <h2>Learning</h2>
    //       <div className='main-navbar--dropdown-content'>
    //         <Link className='link no-strike' to='/crypto'>
    //           Crypto
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           NFTs
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Finance 101
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Joint Bank Accounts
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Digital Payments
    //         </Link>
    //       </div>
    //     </Col>
    //     <Col xs={'auto'} className='main-navbar--dropdown'>
    //       <h2>Services</h2>
    //       <div className='main-navbar--dropdown-content'>
    //         <Link className='link strike' to='#'>
    //           Mobile Banking
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Student Checking
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Travel Tips
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Overdraft Services
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           New to Purse
    //         </Link>
    //       </div>
    //     </Col>
    //     <Col xs={'auto'} className='main-navbar--dropdown'>
    //       <h2>Products</h2>
    //       <div className='main-navbar--dropdown-content'>
    //         <Link className='link strike' to='#'>
    //           CDs
    //         </Link>
    //         <Link
    //           className='link no-strike'
    //           to='/credit-offer?card=travel-card'
    //         >
    //           Credit Cards
    //         </Link>
    //         <Link className='link no-strike' to='/cyber-incident-2021'>
    //           Crypto Wallet
    //         </Link>
    //         <Link className='link strike' to='#'>
    //           Stock Wallet
    //         </Link>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default MainNav;
