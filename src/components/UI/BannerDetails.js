import classes from './BannerDetails.module.css';

const BannerDetails = () => {
  const username = localStorage.getItem('displayName');
  let timeOfDay;

  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date()
  );
  const time = new Date().getHours();
  if (time >= 0 && time < 6) {
    timeOfDay = 'GO TO SLEEP';
  } else if (time >= 6 && time < 12) {
    timeOfDay = 'Good Morning';
  } else if (time >= 12 && time < 17) {
    timeOfDay = 'Good Afternoon';
  } else {
    timeOfDay = 'Good Evening';
  }

  return (
    <div className={classes.details}>
      <h1 className={classes.name}>
        {timeOfDay}, {username}!
      </h1>
      <h3 className={classes.date}>Today is {date}</h3>
    </div>
  );
};

export default BannerDetails;
