import { Container, Row, Col, Carousel } from 'react-bootstrap';

import SignIn from './SignIn';
import WelcomeBackplate from './WelcomeBackplate';

const WelcomeBanner = () => {
  return (
    <Container className='d-flex justify-content-center welcome-banner'>
      <SignIn />
      <WelcomeBackplate />
      {/* <Col className='d-block d-lg-none'>
            <Carousel>
              {CreditCardOffers.map((item) => (
                <Carousel.Item key={item.name}>
                  <WelcomeCard
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
          </Col> */}
    </Container>
  );
};

export default WelcomeBanner;
