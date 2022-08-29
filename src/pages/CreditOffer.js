import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  starCardData,
  travelCardData,
  blazeCardData,
} from '../helpers/data/CreditCardData';
import { convertRating } from '../helpers/functions/MiscFunctions';

import CommentCard from '../components/UI/General/CommentCard';

import LegalMashup_40 from '../assets/LegalMashup_40.webp';
import { getDateSortedComments } from '../helpers/functions/ApiFunctions';

const CreditOffer = () => {
  const [cardData, setCardData] = useState({});
  const [comments, setComments] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const cardParam = queryParams.get('card');

  // Load correct CC Offer page
  useEffect(() => {
    switch (cardParam) {
      case 'star-card':
        setCardData({
          title: starCardData.title,
          about: starCardData.about,
          cardImage: starCardData.cardImage,
          catchphrase: starCardData.catchphrase,
          description: starCardData.description,
        });
        break;
      case 'travel-card':
        setCardData({
          title: travelCardData.title,
          about: travelCardData.about,
          cardImage: travelCardData.cardImage,
          catchphrase: travelCardData.catchphrase,
          description: travelCardData.description,
        });
        break;
      default:
        setCardData({
          title: blazeCardData.title,
          about: blazeCardData.about,
          cardImage: blazeCardData.cardImage,
          catchphrase: blazeCardData.catchphrase,
          description: blazeCardData.description,
        });
    }
  }, [cardParam]);

  // Get user reviews (comments)
  useEffect(() => {
    getDateSortedComments()
      .then((dateSortedComments) => {
        setComments(dateSortedComments);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className='credit-offer'>
      <h1 className='credit-offer--title'>{cardData.title}</h1>
      <h2 className='credit-offer--subtitle'>
        <i>Our Best Credit Card Bar None!</i>
      </h2>
      <img src={cardData.cardImage} alt='Credit Card' />
      <div className='body'>
        <h2 className='body--about'>{cardData.about}</h2>
        <h3 className='body--catchphrase'>
          <i>{cardData.catchphrase}</i>
        </h3>
        <p className='body--description'>{cardData.description}</p>
        <a href='/contact' className='body--link'>
          <h3>Call Now To Enroll!</h3>
        </a>
      </div>
      <div className='divider' />
      <div className='legal'>
        <h3>Rate and Fee Information</h3>
        <p>
          Be sure to read all Terms and Conditions prior to applying for a Purse
          Credit Card.
        </p>
        <img src={LegalMashup_40} alt='Terms and Conditions' />
      </div>
      <div className='reviews'>
        <h3 className='reviews--title'>See what the world is saying!</h3>
        {comments?.map((comment) => (
          <CommentCard
            key={comment.username}
            username={comment.username}
            age={comment.age}
            location={comment.location}
            memberDate={comment.memberDate}
            overallStars={convertRating(comment.overallStars)}
            commentDate={comment.commentDate}
            title={comment.title}
            content={comment.content}
            onlineStars={convertRating(comment.onlineStars)}
            customerStars={convertRating(comment.customerStars)}
            accountStars={convertRating(comment.accountStars)}
            recommend={comment.recommend}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditOffer;
