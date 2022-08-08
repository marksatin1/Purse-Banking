import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { importAll } from '../../helpers/Helpers';

import classes from './WelcomeCard.module.css';

const CreditOfferCard = ({
  name,
  pageUrl,
  description,
  annualFee,
  signingNumber,
  signingBonus,
  cashbackOffer,
}) => {
  let cardImage, cardImage66;
  const images = importAll(require.context('../../assets/Dummy-Cards'));

  if (name === 'Star Card') {
    cardImage = images.StarCard;
    cardImage66 = images.StarCard_66;
  } else if (name === 'Travel Card') {
    cardImage = images.TravelCard;
    cardImage66 = images.TravelCard_66;
  } else if (name === 'Blaze Card') {
    cardImage = images.BlazeCard;
    cardImage66 = images.BlazeCard_66;
  } else {
    return null;
  }

  return (
    <Container className={classes.card}>
      <Row>
        <Link to={pageUrl} className={classes.link}>
          <Col className={classes.description}>{description}</Col>
          <Col>
            <img
              src={cardImage}
              srcSet={`${cardImage} 400w, ${cardImage66} 264w`}
              alt={description}
            />
          </Col>
          <Col className={classes['annual-fee']}>${annualFee} Annual Fee</Col>
          <Col className={classes['signing-number']}>{signingNumber}</Col>
          <div className={classes.wrapper}>
            <Col className={classes['signing-bonus']}>{signingBonus}</Col>
            <Col className={classes['cashback-offer']}>{cashbackOffer}</Col>
          </div>
        </Link>
      </Row>
    </Container>
  );
};

export default CreditOfferCard;
