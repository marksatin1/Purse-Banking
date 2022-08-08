import Guns from '../../../assets/Personality-Banners/Guns.webp';
import BloodDiamonds from '../../../assets/Personality-Banners/BloodDiamonds.webp';
import Lasagna from '../../../assets/Personality-Banners/Lasagna.webp';

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
    <div className='card'>
      <img src={cardImage} alt={title} />
      <div className='content'>
        <div className='titles'>
          <h1 className='title'>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className='learn-container'>
          <a href={href} target='_blank' rel='noopener noreferrer'>
            <button type='button'>Learn More {'>'}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
