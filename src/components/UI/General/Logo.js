import { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';

import AuthContext from '../../../context/auth-context';

import Handbag_25 from '../../../assets/Emojis/Handbag_25.webp';

const Logo = () => {
  const [animClass, setAnimClass] = useState('');

  const authCtx = useContext(AuthContext);
  const homeLink = authCtx.isSignedIn ? '/my-purse/accounts' : '/';

  return (
    <>
      <Nav>
        <Nav.Link
          href={homeLink}
          className='d-flex align-items-center logo'
          onMouseOver={() => {
            setAnimClass('motto-slide-in');
          }}
        >
          <img src={Handbag_25} className='logo--icon' alt='Handbag' />
          <span className='logo--title'>Purse</span>
        </Nav.Link>
      </Nav>
      <span className={`d-none d-md-block motto ${animClass}`}>
        Keeping Eyes On Your Bag For Over 6000 Years!
      </span>
    </>
  );
};

export default Logo;
