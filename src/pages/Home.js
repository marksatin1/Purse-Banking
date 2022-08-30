import { useNavigate } from 'react-router-dom';

import { usdFormatter } from '../helpers/functions/MiscFunctions';
import { accountsSummary } from '../helpers/data/BankingData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountBanner from '../components/UI/Accounts/AccountBanner';
import Slidebar from '../components/UI/General/Slidebar';

const { checkingData, savingsData, creditsData } = accountsSummary;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <AccountBanner />
      {/* <Slidebar title='Welcome Home!' /> */}
      <div className='home-h'>
        <div className='table-container'>
          <Row>
            <Col xs={10} sm={12} className='main-title'>
              <h1>Debit Accounts</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9} sm={11} className='table'>
              <Row className='thead'>
                <Col></Col>
                <Col className='green'>Available Balance</Col>
                <Col className='d-none d-md-block'>
                  Today's Beginning Balance
                </Col>
                <Col className='d-none d-md-block'>Pending Transactions</Col>
              </Row>
              <Row
                className='line-item'
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=checking')
                }
              >
                <Col xs={6} md={3}>
                  <b className='account'>Purse Convenience Checking</b>
                </Col>
                <Col xs={6} md={3} className='green'>
                  {usdFormatter(checkingData.availBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter(checkingData.begBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter(checkingData.pending)}
                </Col>
              </Row>
              <Row
                className='line-item'
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=savings')
                }
              >
                <Col xs={6} md={3}>
                  <b className='account'>Purse Spectacular Savings</b>
                </Col>
                <Col xs={6} md={3} className='green'>
                  {usdFormatter(savingsData.availBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter(savingsData.begBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter(savingsData.pending)}
                </Col>
              </Row>
              <Row>
                <Col className='advert' onClick={() => navigate('/crypto')}>
                  Want to invest in cryptocurrency? Become an expert TODAY!
                </Col>
              </Row>
              <Row className='thead'>
                <Col xs={6} md={3}>
                  <b className='account'>Total</b>
                </Col>
                <Col xs={6} md={3} className='green'>
                  {usdFormatter(
                    +checkingData.availBalance + +savingsData.availBalance
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className='table-container'>
          <Row>
            <Col xs={10} sm={12} md={10} lg={11} className='main-title'>
              <h1>Credit Cards</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9} sm={11} md={19} lg={10} className='table'>
              <Row className='thead'>
                <Col></Col>
                <Col>Current Balance</Col>
                <Col className='d-none d-md-block'>Available Credit</Col>
                <Col className='d-none d-md-block'>Payment Due Date</Col>
              </Row>
              <Row
                className='line-item'
                onClick={() => navigate('/my-purse/credit-card-accounts')}
              >
                <Col xs={6} md={3}>
                  <b className='account'>Purse Infinity Cash Card</b>
                </Col>
                <Col xs={6} md={3} className='red'>
                  {usdFormatter(creditsData.curBalance)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {usdFormatter(creditsData.availCredit)}
                </Col>
                <Col md={3} className='d-none d-md-block'>
                  {creditsData.paymentDueDate}
                </Col>
              </Row>
              <Row>
                <Col
                  className='advert'
                  onClick={() => navigate('/credit-offer?card=star-card')}
                >
                  Have you considered signing up for another credit card? It's
                  EASY and FUN!
                </Col>
              </Row>
              <Row className='thead'>
                <Col xs={6} md={3}>
                  <b>Total</b>
                </Col>
                <Col xs={6} md={3} className='red'>
                  {usdFormatter(creditsData.curBalance)}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
