import Compass from '../../../assets/Emojis/Compass.webp';

const LocateMe = ({ panTo, setIsGeoLocating }) => {
  return (
    <button
      className='locate-icon'
      onClick={() => {
        setIsGeoLocating(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo(position.coords.latitude, position.coords.longitude);
            setIsGeoLocating(false);
          },
          () => null
        );
      }}
    >
      <img className='compass' src={Compass} alt='Locate my bag' />
    </button>
  );
};

export default LocateMe;
