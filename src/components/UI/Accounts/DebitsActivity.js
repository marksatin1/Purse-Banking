import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DepositsActivity = (props) => {
  return (
    <>
      <Container className='table'>
        <div className='layout'>
          <Row className='trow'>
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
            <Row key={uuidv4()} className='trow'>
              <Col xs={1}>{item.date}</Col>
              <Col xs={1}>{item.type.toUpperCase()}</Col>
              <Col xs={5}>{item.description}</Col>
              <Col xs={1}>{usdFormatter.format(item.amount)}</Col>
              <Col xs={1}>{usdFormatter.format(item.balance)}</Col>
            </Row>
          ))}
        </div>
      </Container>
    </>
  );
};

export default DepositsActivity;
