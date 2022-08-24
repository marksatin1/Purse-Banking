import { Container, Row, Col } from 'react-bootstrap';
import { PersonalityCardData } from '../../../helpers/data/PersonalityCardData';

import PersonalityCard from '../General/PersonalityCard';

const PersonalityBanner = () => {
  return (
    <Container className='personality-banner'>
      <h1 className='personality-banner--title'>
        We're more than just a bank!
      </h1>
      <Row>
        {PersonalityCardData.map((item) => (
          <Col key={item.name} lg={4}>
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
