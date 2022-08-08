import { Container, Row, Col } from 'react-bootstrap';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

const DepositsDetails = ({ details }) => {
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
          <b>Routing Number</b>
        </Col>
        <Col>{details.routeNumber}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Interest Rate</b>
        </Col>
        <Col>{details.interestRate.toFixed(2)}%</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Accrued Interest YTD</b>
        </Col>
        <Col>{usdFormatter.format(details.accruedInterest)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Previous Statement Date</b>
        </Col>
        <Col>{details.prevStatementDate}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className='trow'>
        <Col>
          <b>Effective Date</b>
        </Col>
        <Col>{details.effectiveDate}</Col>
      </Row>
    </Container>
  );
};

export default DepositsDetails;
