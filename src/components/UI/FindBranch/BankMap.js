import { useState, memo } from 'react';

import { convertRating } from '../../../helpers/functions/MiscFunctions';

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import LocateMe from './LocateMe';

import Moneybag from '../../../assets/Emojis/Moneybag.webp';

const mapContainerStyle = {
  height: '60vh',
  borderRadius: '5px',
  border: '2px solid black',
  boxShadow: '2px 2px 2px black',
  margin: '0 auto 2rem',
};

const BankMap = ({ initCenter, panTo, loadPlaces, requestedPlaces }) => {
  const [selectedLoc, setSelectedLoc] = useState(null);
  const [isGeoLocating, setIsGeoLocating] = useState(false);

  const locMarkers = requestedPlaces.map((loc) => {
    return (
      <Marker
        key={loc.place_id}
        position={loc.geometry.location}
        icon={{
          url: Moneybag,
          scaledSize: new window.google.maps.Size(45, 45),
        }}
        onClick={() => {
          setSelectedLoc(loc);
        }}
      />
    );
  });

  return (
    <GoogleMap
      className='bank-map'
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={initCenter}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onLoad={loadPlaces}
    >
      {isGeoLocating && (
        <div className='bank-map--alert'>
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
      {locMarkers}
      {selectedLoc && (
        <InfoWindow
          position={selectedLoc.geometry.location}
          onCloseClick={() => {
            setSelectedLoc(null);
          }}
        >
          <div className='info-window'>
            <h3 className='info-window--alert'>
              BAG SPOTTED! BAG SPOTTED! BAG SPOTTED! BAG SPOTTED! BAG SPOTTED!
              BAG SPOTTED! BAG SPOTTED!
            </h3>
            <h1 className='info-window--location'>{selectedLoc.name}</h1>
            <div className='status-container'>
              <img
                className='status-container--icon'
                src={selectedLoc.icon}
                alt='Location Icon'
              />
              <h5 className='status-container--status'>
                {selectedLoc.business_status}
              </h5>
            </div>
            <img
              className='status-container--rating'
              src={convertRating(selectedLoc.rating)}
              alt='Rating'
            />
            <p className='status-containter--address'>
              {selectedLoc.formatted_address}
            </p>
          </div>
        </InfoWindow>
      )}
      <LocateMe panTo={panTo} setIsGeoLocating={setIsGeoLocating} />)
    </GoogleMap>
  );
};

export default memo(BankMap);
