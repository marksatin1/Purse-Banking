import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/Helpers';

import classes from './CreditsActivity.module.css';

const CreditsActivity = ({ activity }) => {
  return (
    <Container className={classes.table}>
      <div className={classes.layout}>
        <Row className={classes.trow}>
          <Col xs={2}>
            <b>Date</b>
          </Col>
          <Col xs={5} sm={5}>
            <b>Description</b>
          </Col>
          <Col xs={1} sm={2}>
            <b>Amount</b>
          </Col>
        </Row>
        {activity.map((item) => (
          <Row key={uuidv4()} className={classes.trow}>
            <Col xs={2}>{item.date}</Col>
            <Col xs={5} sm={5}>
              {item.description}
            </Col>
            <Col xs={1} sm={2}>
              {usdFormatter.format(item.amount)}
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default CreditsActivity;
