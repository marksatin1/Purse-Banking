import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import classes from './ContactCard.module.css';

const ContactCard = ({ department, contactData }) => {
  return (
    <Container className={classes.card}>
      <Row>
        <Col xs={12}>
          <h2 className={classes.department}>
            {{ department, contactData }.department}
          </h2>
        </Col>
        <Col className={classes.content}>
          {{ department, contactData }.contactData.map((item) => (
            <Row key={uuidv4()}>
              <Col xs={12} xl={6} className={classes.issue}>
                <p>{item.issue}</p>
              </Col>
              <Col xs={12} xl={6} className={classes.phone}>
                <p>{item.phone}</p>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12}>
          <h3 className={classes['wait-time']}>
            Estimated wait time {'<'} 175 mins
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactCard;
