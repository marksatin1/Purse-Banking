import { Container, Row, Col } from 'react-bootstrap';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

const CreditsDetails = ({ details }) => {
  return (
    <Container className='table'>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Account Name</b>
        </Col>
        <Col>{details.accountName}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Account Number</b>
        </Col>
        <Col>{details.accountNumber}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Credit Limit</b>
        </Col>
        <Col>{details.creditLimit}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Previous Statement Balance</b>
        </Col>
        <Col>{usdFormatter.format(details.prevStatementBalance)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Previous Statement Date</b>
        </Col>
        <Col>{details.prevStatementDate}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Last Payment Amount</b>
        </Col>
        <Col>{usdFormatter.format(details.lastPaymentAmount)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Last Payment Received</b>
        </Col>
        <Col>{details.lastPaymentReceived}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Interest Rate</b>
        </Col>
        <Col>{details.interestRate}%</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Account Opened</b>
        </Col>
        <Col>{details.effectiveDate}</Col>
      </Row>
    </Container>
  );
};

export default CreditsDetails;
