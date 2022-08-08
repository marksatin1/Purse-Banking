import { useState, memo } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
import { convertRating } from '../../helpers/Helpers';

import Moneybag from '../../assets/Emojis/Moneybag.webp';

import LocateMe from './LocateMe';
import classes from './BankMap.module.css';

const mapContainerStyle = {
  width: '100%',
  height: '60vh',
  borderRadius: '5px',
  border: '2px solid black',
  boxShadow: '2px 2px 2px black',
  marginBottom: '2rem',
};
const center = {
  lat: 36.114647,
  lng: -115.172813,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const BankMap = ({ loadPlaces, requestedPlaces, panTo }) => {
  const [selected, setSelected] = useState(null);
  const [isGeoLocating, setIsGeoLocating] = useState(false);

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
        onLoad={loadPlaces}
      >
        {isGeoLocating && (
          <div className={classes.wait}>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
            <h1>PLEASE WAIT PLEASE WAIT PLEASE WAIT</h1>
          </div>
        )}
        {requestedPlaces.map((place) => (
          <Marker
            key={uuidv4()}
            position={place.geometry.location}
            icon={{
              url: Moneybag,
              scaledSize: new window.google.maps.Size(45, 45),
            }}
            onClick={() => {
              setSelected(place);
            }}
          />
        ))}
        {selected && (
          <InfoWindow
            position={selected.geometry.location}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h3 className={classes.spotted}>
                BAG SPOTTED! BAG SPOTTED! BAG SPOTTED! BAG SPOTTED! BAG SPOTTED!
                BAG SPOTTED! BAG SPOTTED!
              </h3>
              <h1 className={classes.name}>{selected.name}</h1>
              <div className={classes['status-container']}>
                <img
                  className={classes.icon}
                  src={selected.icon}
                  alt='Location Icon'
                />
                <h5 className={classes.status}>{selected.business_status}</h5>
              </div>
              <img
                className={classes.rating}
                src={convertRating(selected.rating)}
                alt='Rating'
              />
              <p className={classes.address}>{selected.formatted_address}</p>
            </div>
          </InfoWindow>
        )}
        <LocateMe panTo={panTo} setIsGeoLocating={setIsGeoLocating} />)
      </GoogleMap>
    </>
  );
};

export default memo(BankMap);
