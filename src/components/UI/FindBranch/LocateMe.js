import Compass from '../../../assets/Emojis/Compass.webp';

const LocateMe = ({ setIsGeoLocating, panTo }) => {
  return (
    <button
      className='locate-icon'
      onClick={() => {
        setIsGeoLocating(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
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
