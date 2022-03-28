import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Container>
      <Row>
        <Col xs={12} className={classes['flex-start']}>
          <div className={classes['logo-bar']} onMouseOver={showMottoHandler}>
            <Link to={homepageLink} className={classes.logo}>
              <img src={Handbag_25} alt='Da purse' />
              <span>Purse</span>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={mottoClasses}>
          Keeping Eyes On Your Bag For Over 6000 Years!
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
