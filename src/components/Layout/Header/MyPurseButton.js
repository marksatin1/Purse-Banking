import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AuthContext from '../../../context/auth-context';

import classes from './MyPurseButton.module.css';

const MyPurseButton = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 6, offset: 7 }}
          sm={{ offset: 8 }}
          md={{ offset: 8 }}
          lg={{ offset: 9 }}
          xl={{ offset: 10 }}
        >
          <Row>
            {!authCtx.isSignedIn && (
              <Link to='/register'>
                <Col className={classes['my-purse-container']}>
                  <button type='button'>Register</button>
                </Col>
              </Link>
            )}
            {authCtx.isSignedIn && (
              <Col>
                <div className={classes['my-purse-container']}>
                  <button type='button'>My Purse</button>
                  <div className={classes['dropdown-content']}>
                    <Link to='my-purse/accounts' className={classes.link}>
                      My Accounts
                    </Link>
                    <Link to='my-purse/user-settings' className={classes.link}>
                      User Settings
                    </Link>
                    <button type='button' onClick={authCtx.signOut}>
                      Sign Out
                    </button>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPurseButton;
