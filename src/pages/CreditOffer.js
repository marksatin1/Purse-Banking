import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  starCardData,
  travelCardData,
  blazeCardData,
} from '../helpers/CreditCardData';
import { convertRating } from '../helpers/Helpers';
import { v4 as uuidv4 } from 'uuid';

import LegalMashup_40 from '../assets/LegalMashup_40.webp';

import CommentCard from '../components/UI/CommentCard';
import classes from './CreditOffer.module.css';

let title, cardImage, about, catchphrase, description;

const dateFormatter = (value) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(new Date(value));
  return formattedDate;
};

const CreditOffer = () => {
  const [comments, setComments] = useState();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const queryParams = new URLSearchParams(location.search);
  const cardParam = queryParams.get('card');

  if (cardParam === 'star-card') {
    title = starCardData.title;
    about = starCardData.about;
    cardImage = starCardData.cardImage;
    catchphrase = starCardData.catchphrase;
    description = starCardData.description;
  } else if (cardParam === 'travel-card') {
    title = travelCardData.title;
    about = travelCardData.about;
    cardImage = travelCardData.cardImage;
    catchphrase = travelCardData.catchphrase;
    description = travelCardData.description;
  } else if (cardParam === 'blaze-card') {
    title = blazeCardData.title;
    about = blazeCardData.about;
    cardImage = blazeCardData.cardImage;
    catchphrase = blazeCardData.catchphrase;
    description = blazeCardData.description;
  }

  useEffect(() => {
    const commentData = [];

    fetch(
      'https://react-http-841ed-default-rtdb.firebaseio.com/comments.json',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          if (data.error.message) {
            throw new Error(data.error.message);
          }
        }
      })
      .then((data) => {
        for (const key in data) {
          commentData.push({
            id: uuidv4(),
            username: data[key].username,
            age: data[key].age,
            location: data[key].location,
            memberDate: data[key].memberDate,
            overallStars: data[key].overallStars,
            commentDate: data[key].commentDate,
            title: data[key].title,
            content: data[key].content,
            onlineStars: data[key].onlineStars,
            customerStars: data[key].customerStars,
            accountStars: data[key].accountStars,
            recommend: data[key].recommend,
          });
        }

        const commentCards = commentData.map((item) => {
          return (
            <CommentCard
              key={item.id}
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
          );
        });
        commentCards.sort(
          (a, b) =>
            new Date(b.props.commentDate) - new Date(a.props.commentDate)
        );
        setComments(commentCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.layout}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subtitle}>
        <i>Our Best Credit Card Bar None!</i>
      </h2>
      <img src={cardImage} alt='Credit Card' />
      <div className={classes.description}>
        <h2 className={classes.about}>{about}</h2>
        <h3 className={classes.catchphrase}>
          <i>{catchphrase}</i>
        </h3>
        {description}
        <Link to='/contact' className={classes.enroll}>
          <h2>Call Now To Enroll!</h2>
        </Link>
      </div>
      <div className={classes.divider} />
      <div className={classes.legal}>
        <h3>Rate and Fee Information</h3>
        <p>
          Be sure to read all Terms and Conditions prior to applying for a Purse
          Credit Card.
        </p>
        <img src={LegalMashup_40} alt='Terms and Conditions' />
      </div>
      <div className={classes.reviews}>
        <h2>See what the world is saying!</h2>
        {comments}
      </div>
    </div>
  );
};

export default CreditOffer;
