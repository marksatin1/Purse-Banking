import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AuthContext from '../../../context/auth-context';

const MyPurseButton = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Container className='d-flex justify-content-end'>
      <Row className='my-purse-btn'>
        <Col>
          {!authCtx.isSignedIn && (
            <Link to='/register'>
              <button type='button'>Register</button>
            </Link>
          )}
          {authCtx.isSignedIn && (
            <>
              <button type='button'>My Purse</button>
              <div className='button-container--content'>
                <Link to='my-purse/accounts' className='link'>
                  My Accounts
                </Link>
                <Link to='my-purse/user-settings' className='link'>
                  User Settings
                </Link>
                <button type='button' onClick={authCtx.signOut}>
                  Sign Out
                </button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyPurseButton;
