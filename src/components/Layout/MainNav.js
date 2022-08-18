import { Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <div className='d-flex justify-content-end main-nav--container'>
      <Nav className='main-nav'>
        <Nav.Item className='main-nav--item'>
          <h2>Learning</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link no-strike' href='/crypto'>
              Crypto
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              NFTs
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Finance 101
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Joint Bank Accounts
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Digital Payments
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Services</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link strike' href='#'>
              Mobile Banking
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Student Checking
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Travel Tips
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Overdraft Services
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              New to Purse
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Products</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link strike' href='#'>
              CDs
            </Nav.Link>
            <Nav.Link
              className='link no-strike'
              href='/credit-offer?card=travel-card'
            >
              Credit Cards
            </Nav.Link>
            <Nav.Link className='link no-strike' href='/cyber-incident-2021'>
              Crypto Wallet
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              Stock Wallet
            </Nav.Link>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MainNav;
