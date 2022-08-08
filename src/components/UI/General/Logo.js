import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth-context';

import Handbag_25 from '../../../assets/Emojis/Handbag_25.webp';

const Logo = () => {
  const [mottoClasses, setMottoClasses] = useState('motto');
  const authCtx = useContext(AuthContext);

  const showMottoHandler = () => {
    setMottoClasses('motto motto-animation');
  };

  const homepageLink = authCtx.isSignedIn ? '/my-purse/accounts' : '/';

  return (
    <div className='display'>
      <Link
        to={homepageLink}
        className='logo-nav'
        onMouseOver={showMottoHandler}
      >
        <img src={Handbag_25} className='handbag' alt='Handbag icon' />
        <div className='purse'>Purse</div>
      </Link>
      <div className={mottoClasses}>
        Keeping Eyes On Your Bag For Over 6000 Years!
      </div>
    </div>
  );
};

export default Logo;
