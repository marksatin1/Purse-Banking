import Nav from 'react-bootstrap/Nav';

const MainNav = () => {
  return (
    <div className='d-flex justify-content-end'>
      <Nav className='d-flex flex-row main-nav'>
        <Nav.Item className='main-nav--item'>
          <h2>Learning</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link href='/crypto'>
              <p className='valid-link'>Crypto</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>NFTs</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Decentralized Banking</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Digital Payments</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Finance 101</p>
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Services</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link href='#'>
              <p className='broken-link'>Mobile App</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Student Checking</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>International Banking</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Overdraft Protection</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Travel Tips</p>
            </Nav.Link>
          </div>
        </Nav.Item>
        <Nav.Item className='main-nav--item'>
          <h2>Products</h2>
          <div className='main-nav--dropdown-content'>
            <Nav.Link href='#'>
              <p className='broken-link'>CDs</p>
            </Nav.Link>
            <Nav.Link href='/credit-offer?card=travel-card'>
              <p className='valid-link'>Credit Cards</p>
            </Nav.Link>
            <Nav.Link href='/crypto-wallet'>
              <p className='broken-link'>Crypto Wallet</p>
            </Nav.Link>
            <Nav.Link href='#'>
              <p className='broken-link'>Stock Portfolio</p>
            </Nav.Link>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MainNav;
