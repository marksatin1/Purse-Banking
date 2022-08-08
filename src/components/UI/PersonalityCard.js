import Guns from '../../assets/Personality-Banners/Guns.webp';
import BloodDiamonds from '../../assets/Personality-Banners/BloodDiamonds.webp';
import Lasagna from '../../assets/Personality-Banners/Lasagna.webp';

import classes from './PersonalityCard.module.css';

const PersonalityCard = ({ name, title, subtitle, href }) => {
  let cardImage;

  if (name === 'Guns') {
    cardImage = Guns;
  } else if (name === 'Diamonds') {
    cardImage = BloodDiamonds;
  } else if (name === 'Lasagna') {
    cardImage = Lasagna;
  } else {
    return null;
  }

  return (
    <div className={classes.card}>
      <img src={cardImage} alt={title} />
      <div className={classes.content}>
        <div className={classes.titles}>
          <h1 className={classes.title}>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={classes['learn-container']}>
          <a href={href} target='_blank' rel='noopener noreferrer'>
            <button type='button'>Learn More {'>'}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
