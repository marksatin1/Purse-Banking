import { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';

import AuthContext from '../../../context/auth-context';

import Handbag_25 from '../../../assets/Emojis/Handbag_25.webp';

const Logo = () => {
  const [mottoClasses, setMottoClasses] = useState('motto');
  const authCtx = useContext(AuthContext);

  const homeLink = authCtx.isSignedIn ? '/my-purse/accounts' : '/';

  return (
    <div className='logo--container'>
      <Nav>
        <Nav.Link
          href={homeLink}
          className='d-flex align-items-center logo'
          onMouseOver={() => {
            setMottoClasses('motto motto--slide-in');
          }}
        >
          <img src={Handbag_25} className='icon--bag' alt='Handbag icon' />
          <span className='logo--title'>Purse</span>
        </Nav.Link>
      </Nav>
      <span className={mottoClasses}>
        Keeping Eyes On Your Bag For Over 6000 Years!
      </span>
    </div>
  );
};

export default Logo;
