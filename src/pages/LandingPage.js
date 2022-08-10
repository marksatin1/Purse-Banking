import { Container, Row, Col } from 'react-bootstrap';

import WelcomeBanner from '../components/UI/LandingPage/WelcomeBanner';
import RegisterBanner from '../components/UI/LandingPage/RegisterBanner';
import PersonalityBanner from '../components/UI/LandingPage/PersonalityBanner';
import LegalBanner from '../components/UI/LandingPage/LegalBanner';

const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* <WelcomeBanner />
          <RegisterBanner />
          <PersonalityBanner />
          <LegalBanner /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
