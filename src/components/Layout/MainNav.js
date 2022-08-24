import { Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <div className='d-flex justify-content-end'>
      <Nav className='d-flex flex-row main-nav'>
        <Nav.Item className='main-nav--item'>
          <h2>Learning</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link no-strike' href='/crypto'>
              <p>Crypto</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>NFTs</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Finance 101</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Joint Bank Accounts</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Digital Payments</p>
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Services</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link strike' href='#'>
              <p>Mobile Banking</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Student Checking</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Travel Tips</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Overdraft Services</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>New to Purse</p>
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Products</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link className='link strike' href='#'>
              <p>CDs</p>
            </Nav.Link>
            <Nav.Link
              className='link no-strike'
              href='/credit-offer?card=travel-card'
            >
              <p>Credit Cards</p>
            </Nav.Link>
            <Nav.Link className='link no-strike' href='/cyber-incident-2021'>
              <p>Crypto Wallet</p>
            </Nav.Link>
            <Nav.Link className='link strike' href='#'>
              <p>Stock Wallet</p>
            </Nav.Link>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MainNav;
