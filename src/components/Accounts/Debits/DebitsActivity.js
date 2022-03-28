import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './DebitsActivity.module.css';

const DepositsActivity = (props) => {
  return (
    <Container className={classes.table}>
      <Row className={classes.trow}>
        <Col xs={2}>
          <b>Date</b>
        </Col>
        <Col xs={2}>
          <b>Type</b>
        </Col>
        <Col xs={3}>
          <b>Description</b>
        </Col>
        <Col xs={3}>
          <b>Amount</b>
        </Col>
        <Col xs={2}>
          <b>Balance</b>
        </Col>
      </Row>
      {props.activity.map((item) => (
        <Row key={uuidv4()} className={classes.trow}>
          <Col xs={2}>{item.date}</Col>
          <Col xs={2}>{item.type.toUpperCase()}</Col>
          <Col xs={3}>{item.description}</Col>
          <Col xs={3}>{usdFormatter.format(item.amount)}</Col>
          <Col xs={2}>{usdFormatter.format(item.balance)}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default DepositsActivity;
