import Guns from '../../../assets/Personality-Banners/Guns.webp';
import BloodDiamonds from '../../../assets/Personality-Banners/BloodDiamonds.webp';
import Lasagna from '../../../assets/Personality-Banners/Lasagna.webp';

const PersonalityCard = ({ name, title, subtitle, href }) => {
  let cardImage =
    name === 'Guns' ? Guns : name === 'Diamonds' ? BloodDiamonds : Lasagna;

  return (
    <div className='personality-card'>
      <img src={cardImage} alt={title} />
      <div className='personality-card--content'>
        <div>
          <h1 className='personality-card--title'>{title}</h1>
          <p className='personality-card--subtitle'>{subtitle}</p>
        </div>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <button className='personality-card--btn'>Learn More {'>'}</button>
        </a>
      </div>
    </div>
  );
};

export default PersonalityCard;
