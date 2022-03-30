import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './DebitsActivity.module.css';

const DepositsActivity = (props) => {
  return (
    <Fragment>
      <Container className={classes.table}>
        <div className={classes.layout}>
          <Row className={classes.trow}>
            <Col xs={1}>
              <b>Date</b>
            </Col>
            <Col xs={1}>
              <b>Type</b>
            </Col>
            <Col xs={5}>
              <b>Description</b>
            </Col>
            <Col xs={1}>
              <b>Amount</b>
            </Col>
            <Col xs={1}>
              <b>Balance</b>
            </Col>
          </Row>
          {props.activity.map((item) => (
            <Row key={uuidv4()} className={classes.trow}>
              <Col xs={1}>{item.date}</Col>
              <Col xs={1}>{item.type.toUpperCase()}</Col>
              <Col xs={5}>{item.description}</Col>
              <Col xs={1}>{usdFormatter.format(item.amount)}</Col>
              <Col xs={1}>{usdFormatter.format(item.balance)}</Col>
            </Row>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default DepositsActivity;
