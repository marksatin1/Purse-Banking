import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactData } from '../helpers/data/ContactData';

import ContactCard from '../components/UI/General/ContactCard';

const Contact = () => {
  return (
    <Container className='contact'>
      <Row>
        <div>
          <Col xs={12} md={10} className='page'>
            <h1 className='title'>Contact Us</h1>
            <h2 className='subtitle'>
              <i>What seems to be the problem, dear?</i>
            </h2>
            <Row>
              {ContactData.map((item) => (
                <Col xs={12} lg={6} key={item.department}>
                  <ContactCard department={item.department} data={item.data} />
                </Col>
              ))}
            </Row>
            <div className='location'>
              <h2>
                <i>Or visit us in person at one of our </i>
              </h2>
              <h1>
                <Link to='/find-branch' className='link'>
                  Fine Locations
                </Link>
              </h1>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
