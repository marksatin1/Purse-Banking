import StarCard from '../../assets/Dummy-Cards/StarCard.webp';
import TravelCard from '../../assets/Dummy-Cards/TravelCard.webp';
import BlazeCard from '../../assets/Dummy-Cards/BlazeCard.webp';

export const CreditCardOffers = [
  {
    name: 'Star Card',
    description: 'Your First Card',
    annualFee: '6,000',
    signingNumber: '10',
    signingBonus: 'points instantly added to your credit score',
    cashbackOffer: '0.4% cash back on all purchases made by a toddler',
    pageUrl: '/credit-offer?card=star-card',
  },
  {
    name: 'Travel Card',
    description: 'Travel Rewards',
    annualFee: '12,000',
    signingNumber: '4,000',
    signingBonus: 'bonus frequent flier miles on activation',
    cashbackOffer:
      '20% discount on NY Times Bestsellers at airport book stores',
    pageUrl: '/credit-offer?card=travel-card',
  },
  {
    name: 'Blaze Card',
    description: 'Unlimited Cash Back',
    annualFee: '42,000',
    signingNumber: '$99',
    signingBonus: 'donated to a nonprofit charity of your choice',
    cashbackOffer:
      "Earn one point for every $4.20 spent at participating 7-11's",
    pageUrl: '/credit-offer?card=blaze-card',
  },
];

export const starCardData = {
  title: 'The Purse™ Star® Card',
  about: 'About the Star Card® from Purse™',
  catchphrase: 'Shopping has never been so fun!',
  cardImage: StarCard,
  description: (
    <p>
      The Star Card® from Purse™ is the perfect entry point for any old child
      looking to get started in the Wonderful World of Credit™. With a
      new-and-improved low, low, low introductory fee of only $6,000 a year
      there's never been a better time to grab a piece of plastic and start
      shopping! Aimed at Purse's younger consumers, the Star Card makes{' '}
      <i>your</i> child a superstar. Parents: just one quick signature and you
      can sit back and relax as your child starts racking up mountains and
      mountains of credit card debt in your name! You can rest easy as you watch
      your child's credit score skyrocket and your own credit score crash and
      burn! Plus your kids will love showing off their shiny new card to their
      friends as they check out at the toy store. Heck, Legos and Barbie dolls
      have never been so much fun!
    </p>
  ),
};

export const travelCardData = {
  title: 'The Purse™ Bank of Anywhere® Card',
  about: 'About the Bank of Anywhere® Card from Purse™',
  catchphrase: 'Shoot for the moon -- Land among the stars!',
  cardImage: TravelCard,
  description: (
    <p>
      The Purse™ Bank of Anywhere® Card may not be able to take you to space
      just yet, but it does offer the next best thing: fantastic travel rewards
      for visiting any worthwhile destination the world over. With an industry
      standard annual fee of only $12,000 you'll be hitting the slopes{' '}
      <i>and</i> the beach in no time at all thanks to priority business-class
      seating and early-access hotel reservations when you book your stay two
      years in advance. The ultimate pick-up-and-go companion, the Purse™ Bank
      of Anywhere® Card even gets you 20% off New York Times Bestsellers at the
      airport giftshop so you don't have to worry about your wallet getting
      gouged by above-MSRB prices. All aboard -- this train's leaving the
      station fast!
    </p>
  ),
};

export const blazeCardData = {
  title: 'The Purse™ MasterKush Blaze® Card',
  about: 'About the MasterKush Blaze® Card from Purse™',
  catchphrase: 'Get high on great cash back offers!',
  cardImage: BlazeCard,
  description: (
    <p>
      We built the Purse™ MasterKush Blaze® Card for the entrepreneurial
      individual. For the free spirit who knows absolute discipline is the
      absolute priority. For the electric grinder who wakes up at 4am to cold
      showers, mediation saunas, a bowl of dry cereal, and half an apple. For
      the brightest diamonds blazing through life and dusting the plebes with
      their star dust. For the victor. For the winner. For the true caesar.
      Sound like you? We thought so. With a 1:8 cashback ratio the Purse™
      MasterKush Blaze® Card is perfect for startups and established small
      businesses. Plus if you enroll today we'll donate a generous $99 to a
      pre-approved charity of your choice. Sound like you? We thought so. Now
      let's get high!
    </p>
  ),
};
