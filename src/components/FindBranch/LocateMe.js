import Compass from '../../assets/Emojis/Compass.webp';
import classes from './LocateMe.module.css';

const LocateMe = ({ setIsGeoLocating }) => {
  return (
    <button
      className={classes['locate-icon']}
      onClick={() => {
        setIsGeoLocating(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            props.panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setIsGeoLocating(false);
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
