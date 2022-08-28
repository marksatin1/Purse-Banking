import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const creditData = {
  currentBalance: '362.82',
  rewardsBalance: '4,923',
  availCredit: '29637.18',
  minAmountDue: '100.00',
  paymentDueDate: 'January 9, 2022',
};

const CreditsSummary = () => {
  return (
    <Container>
      <div className='summary'>
        <div>
          <p>Current Balance</p>
          <h1>{usdFormatter.format(creditData.currentBalance)}</h1>
        </div>
        <select name='account' id='account'>
          <option value='credit'>Purse Infinity Cash Card</option>
        </select>
        <Row className='data'>
          <Col xs={12} sm={6}>
            <p>Rewards Balance</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{creditData.rewardsBalance} Points</h5>
          </Col>
          <Col xs={12} sm={6}>
            <p>Available Credit</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(creditData.availCredit)}</h5>
          </Col>
          <Col xs={12} sm={6}>
            <p>Minimum Amount Due</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(creditData.minAmountDue)}</h5>
          </Col>
          <Col xs={12} sm={6}>
            <p>Payment Due Date</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{creditData.paymentDueDate}</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CreditsSummary;
