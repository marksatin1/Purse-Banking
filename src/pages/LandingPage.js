import { Container, Row, Col } from 'react-bootstrap';

import WelcomeBanner from '../components/LandingPage/WelcomeBanner/WelcomeBanner';
import RegisterBanner from '../components/LandingPage/RegisterBanner/RegisterBanner';
import PersonalityBanner from '../components/LandingPage/PersonalityBanner/PersonalityBanner';
import LegalBanner from '../components/LandingPage/LegalBanner/LegalBanner';

const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <WelcomeBanner />
          <RegisterBanner />
          <PersonalityBanner />
          <LegalBanner />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
