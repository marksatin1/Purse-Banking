import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactData } from '../helpers/data/ContactData';

import ContactCard from '../components/UI/General/ContactCard';

const Contact = () => {
  return (
    <Container className='contact-page'>
      <h1 className='contact-page--title'>Contact Us</h1>
      <h3 className='contact-page--subtitle'>
        <i>What seems to be the problem, dear?</i>
      </h3>
      <Row>
        {ContactData.map((item) => (
          <Col xs={12} lg={6} key={item.department}>
            <ContactCard department={item.department} data={item.data} />
          </Col>
        ))}
      </Row>
      <div className='contact-page--footer'>
        <h2>
          <i>Or visit us in person at one of our </i>
        </h2>
        <h1>
          <Link to='/find-branch' className='link'>
            Fine Locations
          </Link>
        </h1>
      </div>
    </Container>
  );
};

export default Contact;
