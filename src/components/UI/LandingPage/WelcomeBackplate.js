import { CreditCardOffers } from '../../../helpers/data/CreditCardData';

import CreditOfferCard from '../General/CreditOfferCard';

const WelcomeBackplate = () => {
  return (
    <div className='d-none d-xl-flex justify-content-evenly backplate'>
      {CreditCardOffers.map((item) => (
        <div key={item.name}>
          <CreditOfferCard
            name={item.name}
            description={item.description}
            annualFee={item.annualFee}
            signingNumber={item.signingNumber}
            signingBonus={item.signingBonus}
            cashbackOffer={item.cashbackOffer}
            pageUrl={item.pageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default WelcomeBackplate;
