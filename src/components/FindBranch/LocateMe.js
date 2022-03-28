import Compass from '../../assets/Emojis/Compass.webp';
import classes from './LocateMe.module.css';

const LocateMe = (props) => {
  return (
    <button
      className={classes['locate-icon']}
      onClick={() => {
        props.setIsGeoLocating(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            props.panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            props.setIsGeoLocating(false);
          },
          () => null
        );
      }}
    >
      <img className={classes.compass} src={Compass} alt='Locate my bag' />
    </button>
  );
};

export default LocateMe;
