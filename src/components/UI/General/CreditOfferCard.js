import { Link } from 'react-router-dom';

import BlazeCard from '../../../assets/Dummy-Cards/BlazeCard.webp';
import StarCard from '../../../assets/Dummy-Cards/StarCard.webp';
import TravelCard from '../../../assets/Dummy-Cards/TravelCard.webp';

const CreditOfferCard = ({
  name,
  pageUrl,
  description,
  annualFee,
  signingNumber,
  signingBonus,
  cashbackOffer,
}) => {
  let cardImage =
    name === 'Star Card'
      ? StarCard
      : name === 'Travel Card'
      ? TravelCard
      : BlazeCard;

  return (
    <div className='credit-offer-card'>
      <Link to={pageUrl} className='link'>
        <p className='description'>{description}</p>
        <p>
          <img src={cardImage} alt={description} />
        </p>
        <p className='annual-fee'>${annualFee} Annual Fee</p>
        <p className='signing-number'>{signingNumber}</p>
        <p className='signing-bonus'>{signingBonus}</p>
        <p className='cashback-offer'>{cashbackOffer}</p>
      </Link>
    </div>
  );
};

export default CreditOfferCard;
