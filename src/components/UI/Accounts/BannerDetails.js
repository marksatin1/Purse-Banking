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
    <div className='details'>
      <h1 className='name'>
        {timeOfDay}, {username}!
      </h1>
      <h3 className='date'>Today is {date}</h3>
    </div>
  );
};

export default BannerDetails;
