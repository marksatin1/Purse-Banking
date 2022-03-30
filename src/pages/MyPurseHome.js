import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { usdFormatter } from '../helpers/Helpers';

import BannerDetails from '../components/UI/BannerDetails';
import BumpTitle from '../components/UI/BumpTitle';
import classes from './MyPurseHome.module.css';

const checkingData = {
  begBalance: '32725.28',
  pending: '17800.00',
  availBalance: '14925.28',
};

const savingsData = {
  begBalance: '64903.21',
  pending: '2158.31',
  availBalance: '62744.90',
};

const creditData = {
  curBalance: '362.82',
  availCredit: '29637.18',
  paymentDueDate: 'January 9, 2022',
};

const MyPurseHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className={classes.header}>
        <BannerDetails />
      </div>
      <BumpTitle title='Welcome Home!' />
      <Container className={classes.layout}>
        <div className={classes['table-container']}>
          <Row>
            <Col xs={10} sm={12} className={classes['main-title']}>
              <h1>Debit Accounts</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9} sm={11} className={classes.table}>
              <Row className={classes.thead}>
                <Col></Col>
                <Col className={classes.green}>Available Balance</Col>
                <Col className='d-none d-md-block'>
                  Today's Beginning Balance
                </Col>
                <Col className='d-none d-md-block'>Pending Transactions</Col>
              </Row>
              <Row
                className={classes['line-item']}
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=checking')
                }
              >
                <Col xs={6} md={3}>
                  <b className={classes.account}>Purse Convenience Checking</b>
                </Col>
                <Col xs={6} md={3} className={classes.green}>
                  {usdFormatter.format(checkingData.availBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter.format(checkingData.begBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter.format(checkingData.pending)}
                </Col>
              </Row>
              <Row
                className={classes['line-item']}
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=savings')
                }
              >
                <Col xs={6} md={3}>
                  <b className={classes.account}>Purse Spectacular Savings</b>
                </Col>
                <Col xs={6} md={3} className={classes.green}>
                  {usdFormatter.format(savingsData.availBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter.format(savingsData.begBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter.format(savingsData.pending)}
                </Col>
              </Row>
              <Row>
                <Col
                  className={classes.advert}
                  onClick={() => navigate('/crypto')}
                >
                  Want to invest in cryptocurrency? Become an expert TODAY!
                </Col>
              </Row>
              <Row className={classes.thead}>
                <Col xs={6} md={3}>
                  <b className={classes.account}>Total</b>
                </Col>
                <Col xs={6} md={3} className={classes.green}>
                  {usdFormatter.format(
                    +checkingData.availBalance + +savingsData.availBalance
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={classes['table-container']}>
          <Row>
            <Col
              xs={10}
              sm={12}
              md={10}
              lg={11}
              className={classes['main-title']}
            >
              <h1>Credit Cards</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9} sm={11} md={19} lg={10} className={classes.table}>
              <Row className={classes.thead}>
                <Col></Col>
                <Col>Current Balance</Col>
                <Col className='d-none d-md-block'>Available Credit</Col>
                <Col className='d-none d-md-block'>Payment Due Date</Col>
              </Row>
              <Row
                className={classes['line-item']}
                onClick={() => navigate('/my-purse/credit-card-accounts')}
              >
                <Col xs={6} md={3}>
                  <b className={classes.account}>Purse Infinity Cash Card</b>
                </Col>
                <Col xs={6} md={3} className={classes.red}>
                  {usdFormatter.format(creditData.curBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter.format(creditData.availCredit)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {creditData.paymentDueDate}
                </Col>
              </Row>
              <Row>
                <Col
                  className={classes.advert}
                  onClick={() => navigate('/credit-offer?card=star-card')}
                >
                  Have you considered signing up for another credit card? It's
                  EASY and FUN!
                </Col>
              </Row>
              <Row className={classes.thead}>
                <Col xs={6} md={3}>
                  <b>Total</b>
                </Col>
                <Col xs={6} md={3} className={classes.red}>
                  {usdFormatter.format(creditData.curBalance)}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default MyPurseHome;
