import { dateFormatter } from '../../../helpers/functions/MiscFunctions';

const BannerRibbon = () => {
  const userName = localStorage.getItem('userName');
  const crntDate = dateFormatter();

  const crntHour = new Date().getHours();
  let timeOfDay =
    crntHour >= 0 && crntHour < 6
      ? 'GO TO SLEEP'
      : crntHour >= 6 && crntHour < 12
      ? 'Good Morning'
      : crntHour >= 12 && crntHour < 17
      ? 'Good Afternoon'
      : 'Good Evening';

  return (
    <div className='banner-ribbon'>
      <h1 className='banner-ribbon--name'>
        {timeOfDay}, {userName}!
      </h1>
      <h2 className='banner-ribbon--date'>Today is {crntDate}</h2>
    </div>
  );
};

export default BannerRibbon;
