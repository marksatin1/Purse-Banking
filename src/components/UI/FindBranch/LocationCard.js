const LocationCard = ({ name, icon, status, rating, address }) => {
  return (
    <div className='loc-card'>
      <h1 className='loc-card--name'>{name}</h1>
      <div className='d-flex align-items-center justify-content-center status-container'>
        <img
          className='status-container--icon'
          src={icon}
          alt='Location icon'
        />
        <div>
          <p className='status-container--status'>{status}</p>
          <img
            className='loc-card--rating'
            src={rating}
            alt='Business rating'
          />
        </div>
      </div>
      <p className='loc-card--address'>{address}</p>
    </div>
  );
};

export default LocationCard;
