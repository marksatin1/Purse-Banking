import { useNavigate } from 'react-router-dom';

import { usdFormatter } from '../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerDetails from '../components/UI/Accounts/BannerDetails';
import BumpTitle from '../components/UI/General/BumpTitle';

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

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='home-header'>
        <BannerDetails />
      </div>
      <BumpTitle title='Welcome Home!' />
      <Container className='layout'>
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
                className='line-item'
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=savings')
                }
              >
                <Col xs={6} md={3}>
                  <b className='account'>Purse Spectacular Savings</b>
                </Col>
                <Col xs={6} md={3} className='green'>
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
                <Col className='advert' onClick={() => navigate('/crypto')}>
                  Want to invest in cryptocurrency? Become an expert TODAY!
                </Col>
              </Row>
              <Row className='thead'>
                <Col xs={6} md={3}>
                  <b className='account'>Total</b>
                </Col>
                <Col xs={6} md={3} className='green'>
                  {usdFormatter.format(
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
                  {usdFormatter.format(creditData.curBalance)}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
