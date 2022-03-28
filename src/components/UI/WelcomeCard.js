import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { importAll } from '../../helpers/Helpers';

import classes from './WelcomeCard.module.css';

const CreditOfferCard = (props) => {
  let cardImage, cardImage66;
  const images = importAll(require.context('../../assets/Dummy-Cards'));

  if (props.name === 'Star Card') {
    cardImage = images.StarCard;
    cardImage66 = images.StarCard_66;
  } else if (props.name === 'Travel Card') {
    cardImage = images.TravelCard;
    cardImage66 = images.TravelCard_66;
  } else if (props.name === 'Blaze Card') {
    cardImage = images.BlazeCard;
    cardImage66 = images.BlazeCard_66;
  } else {
    return null;
  }

  return (
    <Container className={classes.card}>
      <Row>
        <Link to={props.pageUrl} className={classes.link}>
          <Col className={classes.description}>{props.description}</Col>
          <Col>
            <img
              src={cardImage}
              srcSet={`${cardImage} 400w, ${cardImage66} 264w`}
              alt={props.description}
            />
          </Col>
          <Col className={classes['annual-fee']}>
            ${props.annualFee} Annual Fee
          </Col>
          <Col className={classes['signing-number']}>{props.signingNumber}</Col>
          <div className={classes.wrapper}>
            <Col className={classes['signing-bonus']}>{props.signingBonus}</Col>
            <Col className={classes['cashback-offer']}>
              {props.cashbackOffer}
            </Col>
          </div>
        </Link>
      </Row>
    </Container>
  );
};

export default CreditOfferCard;
