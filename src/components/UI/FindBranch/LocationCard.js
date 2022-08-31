const LocationCard = ({ name, icon, status, rating, address }) => {
  return (
    <div className='loc-card'>
      <h3 className='loc-card--name'>{name}</h3>
      <div className='status-container'>
        <img
          className='status-container--icon'
          src={icon}
          alt='Location icon'
        />
        <h5 className='status-container--status'>{status}</h5>
      </div>
      <img className='loc-card--rating' src={rating} alt='Business rating' />
      <p className='loc-card--address'>{address}</p>
    </div>
  );
};

export default LocationCard;
