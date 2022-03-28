import { Container, Row, Col } from 'react-bootstrap';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './CreditsDetails.module.css';

const CreditsDetails = (props) => {
  return (
    <Container className={classes.table}>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Account Name</b>
        </Col>
        <Col>{props.details.accountName}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Account Number</b>
        </Col>
        <Col>{props.details.accountNumber}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Credit Limit</b>
        </Col>
        <Col>{props.details.creditLimit}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Previous Statement Balance</b>
        </Col>
        <Col>{usdFormatter.format(props.details.prevStatementBalance)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Previous Statement Date</b>
        </Col>
        <Col>{props.details.prevStatementDate}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Last Payment Amount</b>
        </Col>
        <Col>{usdFormatter.format(props.details.lastPaymentAmount)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Last Payment Received</b>
        </Col>
        <Col>{props.details.lastPaymentReceived}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Interest Rate</b>
        </Col>
        <Col>{props.details.interestRate}%</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Account Opened</b>
        </Col>
        <Col>{props.details.effectiveDate}</Col>
      </Row>
    </Container>
  );
};

export default CreditsDetails;
