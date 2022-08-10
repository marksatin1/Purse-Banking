import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { CreditCardOffers } from '../../../helpers/data/CreditCardData';

import SignIn from './SignIn';
import WelcomeCard from '../General/WelcomeCard';

const WelcomeBanner = () => {
  return (
    <div className='welcome-banner'>
      <Container>
        <Row>
          <Col lg={12} xl={4} className='container'>
            <SignIn />
          </Col>
          <Col xs={11} md={8} lg={12} xl={8} className='backplate-container'>
            <h2 className='title'>Choose the card that's right for you!</h2>
            <Row className='backplate'>
              {CreditCardOffers.map((item) => (
                <Col key={uuidv4()} md={4} className='d-none d-lg-block'>
                  <WelcomeCard
                    name={item.name}
                    description={item.description}
                    annualFee={item.annualFee}
                    signingNumber={item.signingNumber}
                    signingBonus={item.signingBonus}
                    cashbackOffer={item.cashbackOffer}
                    pageUrl={item.pageUrl}
                  />
                </Col>
              ))}
              <Col className='d-block d-lg-none'>
                <Carousel>
                  {CreditCardOffers.map((item) => (
                    <Carousel.Item key={uuidv4()}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeBanner;
