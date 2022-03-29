import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth-context';

import Handbag_25 from '../../../assets/Emojis/Handbag_25.webp';

import classes from './Logo.module.css';

const Logo = () => {
  const [mottoClasses, setMottoClasses] = useState(`${classes.motto}`);
  const authCtx = useContext(AuthContext);

  const showMottoHandler = () => {
    setMottoClasses(`${classes.motto} ${classes['motto-animation']}`);
  };

  const homepageLink = authCtx.isSignedIn ? '/my-purse/accounts' : '/';

  return (
    <div className={classes.display}>
      <Link
        to={homepageLink}
        className={classes['logo-nav']}
        onMouseOver={showMottoHandler}
      >
        <img src={Handbag_25} className={classes.handbag} alt='Handbag icon' />
        <div className={classes.purse}>Purse</div>
      </Link>
      <div className={mottoClasses}>
        Keeping Eyes On Your Bag For Over 6000 Years!
      </div>
    </div>
  );
};

export default Logo;
