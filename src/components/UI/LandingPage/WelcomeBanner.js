import { CreditCardOffers } from '../../../helpers/data/CreditCardData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import SignIn from './SignIn';
import WelcomeBackplate from './WelcomeBackplate';
import CreditOfferCard from './CreditOfferCard';

const WelcomeBanner = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={5} xl={4}>
          <SignIn />
        </Col>
        <Col md={7} xl={8}>
          <h1 className='welcome-banner--title'>
            Choose the card that's right for you!
          </h1>
          <Carousel className='d-xl-none welcome-banner--carousel'>
            {CreditCardOffers.map((item) => (
              <Carousel.Item key={item.name}>
                <CreditOfferCard
                  name={item.name}
                  description={item.description}
                  annualFee={item.annualFee}
                  signingNumber={item.signingNumber}
                  signingBonus={item.signingBonus}
                  cashbackOffer={item.cashbackOffer}
                  pageUrl={item.pageUrl}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <WelcomeBackplate />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeBanner;
