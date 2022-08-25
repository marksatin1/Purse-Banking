import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  starCardData,
  travelCardData,
  blazeCardData,
} from '../helpers/data/CreditCardData';
import {
  dateFormatter,
  convertRating,
} from '../helpers/functions/MiscFunctions';

import LegalMashup_40 from '../assets/LegalMashup_40.webp';

import CommentCard from '../components/UI/General/CommentCard';

const axios = require('axios');

const CreditOffer = () => {
  const [comments, setComments] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const cardParam = queryParams.get('card');

  let title, cardImage, about, catchphrase, description;

  switch (cardParam) {
    case 'star-card':
      title = starCardData.title;
      about = starCardData.about;
      cardImage = starCardData.cardImage;
      catchphrase = starCardData.catchphrase;
      description = starCardData.description;
      break;
    case 'travel-card':
      title = travelCardData.title;
      about = travelCardData.about;
      cardImage = travelCardData.cardImage;
      catchphrase = travelCardData.catchphrase;
      description = travelCardData.description;
      break;
    case 'blaze-card':
      title = blazeCardData.title;
      about = blazeCardData.about;
      cardImage = blazeCardData.cardImage;
      catchphrase = blazeCardData.catchphrase;
      description = blazeCardData.description;
  }

  useEffect(() => {
    const commentData = [];

    axios
      .get('https://react-http-841ed-default-rtdb.firebaseio.com/comments.json')
      .then((response) => {
        const { data } = response;

        for (const review in data) {
          commentData.push({
            username: data[review].username,
            age: data[review].age,
            location: data[review].location,
            memberDate: data[review].memberDate,
            overallStars: data[review].overallStars,
            commentDate: data[review].commentDate,
            title: data[review].title,
            content: data[review].content,
            onlineStars: data[review].onlineStars,
            customerStars: data[review].customerStars,
            accountStars: data[review].accountStars,
            recommend: data[review].recommend,
          });
        }
        commentData.sort(
          (a, b) => new Date(b.commentDate) - new Date(a.commentDate)
        );
        setComments(commentData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  let commentCards = comments
    ? comments.map((item) => (
        <CommentCard
          key={item.username}
          username={item.username}
          age={item.age}
          location={item.location}
          memberDate={item.memberDate}
          overallStars={convertRating(item.overallStars)}
          commentDate={dateFormatter(item.commentDate)}
          title={item.title}
          content={item.content}
          onlineStars={convertRating(item.onlineStars)}
          customerStars={convertRating(item.customerStars)}
          accountStars={convertRating(item.accountStars)}
          recommend={item.recommend}
        />
      ))
    : null;

  return (
    <div className='credit-offer'>
      <h1 className='credit-offer--title'>{title}</h1>
      <h2 className='credit-offer--subtitle'>
        <i>Our Best Credit Card Bar None!</i>
      </h2>
      <img src={cardImage} alt='Credit Card' />
      <div className='body'>
        <h2 className='body--about'>{about}</h2>
        <h3 className='body--catchphrase'>
          <i>{catchphrase}</i>
        </h3>
        <p className='body--description'>{description}</p>
        <Link to='/contact' className='body--link'>
          <h3>Call Now To Enroll!</h3>
        </Link>
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
        <div>{commentCards}</div>
      </div>
    </div>
  );
};

export default CreditOffer;
