import { CreditCardOffers } from '../../../helpers/data/CreditCardData';

import CreditOfferCard from '../General/CreditOfferCard';

const WelcomeBackplate = () => {
  return (
    <div className='d-flex flex-column'>
      <h2 className='title'>Choose the card that's right for you!</h2>
      <div className='d-flex backplate'>
        {CreditCardOffers.map((item) => (
          <div key={item.name} className='d-none d-lg-flex'>
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
    </div>
  );
};

export default WelcomeBackplate;
