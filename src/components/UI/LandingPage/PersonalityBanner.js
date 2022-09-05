import { PersonalityCardData } from '../../../helpers/data/PersonalityCardData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PersonalityCard from './PersonalityCard';

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
