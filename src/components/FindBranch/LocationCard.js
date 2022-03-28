import classes from './LocationCard.module.css';

const LocationCard = (props) => {
  return (
    <div className={classes.card}>
      <h3 className={classes.name}>{props.name}</h3>
      <div className={classes['status-container']}>
        <img className={classes.icon} src={props.icon} alt='Location icon' />
        <h5 className={classes.status}>{props.status}</h5>
      </div>
      <img
        className={classes.rating}
        src={props.rating}
        alt='Business rating'
      />
      <p className={classes.address}>{props.address}</p>
    </div>
  );
};

export default LocationCard;
