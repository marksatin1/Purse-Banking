import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreditsActivity = ({ activity }) => {
  return (
    <Container className='table'>
      <div className='layout'>
        <Row className='trow'>
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
          <Row key={uuidv4()} className='trow'>
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
