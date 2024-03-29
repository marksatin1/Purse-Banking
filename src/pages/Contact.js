import { ContactData } from '../helpers/data/ContactData';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactCard from '../components/UI/General/ContactCard';

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1 className='contact-page--title'>Contact Us</h1>
      <h2 className='contact-page--subtitle'>
        <i>What seems to be the problem, dear?</i>
      </h2>
      <Row>
        {ContactData.map((item) => (
          <Col key={item.department} xs={12} lg={6}>
            <ContactCard department={item.department} contactData={item.data} />
          </Col>
        ))}
      </Row>
      <div className='contact-page--footer'>
        <h3>
          <i>Or visit us in person at one of our </i>
        </h3>
        <h3>
          <a href='/find-branch' className='link'>
            Fine Locations!
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
