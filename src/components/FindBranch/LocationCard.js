import classes from './LocationCard.module.css';

const LocationCard = ({ name, icon, status, rating, address }) => {
  return (
    <div className={classes.card}>
      <h3 className={classes.name}>{name}</h3>
      <div className={classes['status-container']}>
        <img className={classes.icon} src={icon} alt='Location icon' />
        <h5 className={classes.status}>{status}</h5>
      </div>
      <img className={classes.rating} src={rating} alt='Business rating' />
      <p className={classes.address}>{address}</p>
    </div>
  );
};

export default LocationCard;
