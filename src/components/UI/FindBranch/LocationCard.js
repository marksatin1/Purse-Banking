const LocationCard = ({ name, icon, status, rating, address }) => {
  return (
    <div className='card'>
      <h3 className='name'>{name}</h3>
      <div className='status-container'>
        <img className='icon' src={icon} alt='Location icon' />
        <h5 className='status'>{status}</h5>
      </div>
      <img className='rating' src={rating} alt='Business rating' />
      <p className='address'>{address}</p>
    </div>
  );
};

export default LocationCard;
