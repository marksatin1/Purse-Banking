import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactData } from '../../helpers/ContactData';

import ContactCard from '../../components/UI/ContactCard';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <Container>
      <Row>
        <div>
          <Col xs={12} md={10} className={classes.page}>
            <h1 className={classes.title}>Contact Us</h1>
            <h2 className={classes.subtitle}>
              <i>What seems to be the problem, dear?</i>
            </h2>
            <Row>
              {ContactData.map((item) => (
                <Col xs={12} lg={6} key={item.department}>
                  <ContactCard
                    department={item.department}
                    contactData={item.data}
                  />
                </Col>
              ))}
            </Row>
            <div className={classes.location}>
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
