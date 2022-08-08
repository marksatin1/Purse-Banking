import { Container, Row, Col } from 'react-bootstrap';
import { PersonalityCardData } from '../../../helpers/data/PersonalityCardData';

import PersonalityCard from '../General/PersonalityCard';

const PersonalityBanner = () => {
  return (
    <Container className='personality-layout'>
      <h1 className='heading'>
        We're <span className='green'>more</span> than just a bank!
      </h1>
      <Row>
        {PersonalityCardData.map((item) => (
          <Col key={item.name} xs={11} lg={4} className='wrapper'>
            <PersonalityCard
              name={item.name}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PersonalityBanner;
