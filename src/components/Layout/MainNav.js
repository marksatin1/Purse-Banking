import { Nav } from 'react-bootstrap';

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
            <Nav.Link className='link strike' to='#'>
              CDs
            </Nav.Link>
            <Nav.Link
              className='link no-strike'
              to='/credit-offer?card=travel-card'
            >
              Credit Cards
            </Nav.Link>
            <Nav.Link className='link no-strike' to='/cyber-incident-2021'>
              Crypto Wallet
            </Nav.Link>
            <Nav.Link className='link strike' to='#'>
              Stock Wallet
            </Nav.Link>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MainNav;
