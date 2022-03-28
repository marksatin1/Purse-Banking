import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './CreditsActivity.module.css';

const CreditsActivity = (props) => {
  return (
    <Container className={classes.table}>
      <Row className={classes.trow}>
        <Col xs={3}>
          <b>Date</b>
        </Col>
        <Col xs={6}>
          <b>Description</b>
        </Col>
        <Col xs={3}>
          <b>Amount</b>
        </Col>
      </Row>
      {props.activity.map((item) => (
        <Row key={uuidv4()} className={classes.trow}>
          <Col xs={3}>{item.date}</Col>
          <Col xs={6}>{item.description}</Col>
          <Col xs={3}>{usdFormatter.format(item.amount)}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default CreditsActivity;
