import { Container, Row, Col } from 'react-bootstrap';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './DebitsDetails.module.css';

const DepositsDetails = (props) => {
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
          <b>Routing Number</b>
        </Col>
        <Col>{props.details.routeNumber}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Interest Rate</b>
        </Col>
        <Col>{props.details.interestRate.toFixed(2)}%</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Accrued Interest YTD</b>
        </Col>
        <Col>{usdFormatter.format(props.details.accruedInterest)}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Previous Statement Date</b>
        </Col>
        <Col>{props.details.prevStatementDate}</Col>
      </Row>
      <Row xs={1} sm={2} lg={3} className={classes.trow}>
        <Col>
          <b>Effective Date</b>
        </Col>
        <Col>{props.details.effectiveDate}</Col>
      </Row>
    </Container>
  );
};

export default DepositsDetails;
