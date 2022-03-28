import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { CreditCardOffers } from '../../../helpers/CreditCardData';

import SignIn from './SignIn/SignIn';
import WelcomeCard from '../../UI/WelcomeCard';
import classes from './WelcomeBanner.module.css';

const WelcomeBanner = () => {
  return (
    <div className={classes.banner}>
      <Container>
        <Row>
          <Col lg={12} xl={4} className={classes.container}>
            <SignIn />
          </Col>
          <Col xs={11} md={8} xl={8} className={classes['backplate-container']}>
            <h2 className={classes.title}>
              Choose the card that's right for you!
            </h2>
            <Row className={classes.backplate}>
              {CreditCardOffers.map((item) => (
                <Col key={uuidv4()} md={4} className='d-none d-xl-block'>
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
              <Col className='d-block d-xl-none'>
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
