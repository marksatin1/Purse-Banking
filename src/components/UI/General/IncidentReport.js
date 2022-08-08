import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import PurseCEO from '../../../assets/PurseCEO.webp';
import PurseCEO_66 from '../../../assets/PurseCEO_66.webp';

const IncidentReport = ({
  title,
  incident,
  url,
  update,
  message1,
  quote,
  speaker,
  message2,
  applicationMessage,
}) => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={9} className='content'>
          <h2>{title}</h2>
          <h4>
            <i>
              For our statement on the {incident}{' '}
              <Link to={url} className='link'>
                click here
              </Link>
              .
            </i>
          </h4>
          <h4>
            <i>{update}</i>
          </h4>
          <p>{message1}</p>
          <div className='quote-block'>
            <h3 className='quote'>
              <i>{quote}</i>
            </h3>
            <h4 className='speaker'>{speaker}</h4>
          </div>
          <p>{message2}</p>
        </Col>
        <Col xs={12} lg={3} className='ceo'>
          <h2 className='contact'>Contact</h2>
          <img
            src={PurseCEO}
            srcSet={`${PurseCEO} 512w, ${PurseCEO_66} 338w`}
            alt='Purse CEO'
          />
          <div className='dogmo'>
            <h3>Dogmo Inzadorf</h3>
            <p>
              <b>Press Spokesperson</b>
            </p>
            <p className='role'>
              Technology, Sustainability, and Cybersecurity
            </p>
            <p>
              <b>Email</b>
            </p>
            <p>dogmo83@purse.wtf</p>
            <p>
              <b>Phone</b>
            </p>
            <p>555-666-6174</p>
            <p>
              <b>Fax</b>
            </p>
            <p>1-555-666-6128</p>
            <p>
              <b>Microchip</b>
            </p>
            <p>x7A-b163427HVm-L61209</p>
          </div>
        </Col>
        {applicationMessage}
      </Row>
    </Container>
  );
};

export default IncidentReport;
