import { useState, useRef, useCallback } from 'react';

import { convertRating } from '../helpers/functions/MiscFunctions';
import { useLoadScript } from '@react-google-maps/api';
import {
  newCoordsReq,
  gMapsService,
} from '../helpers/functions/GMapsFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationCard from '../components/UI/FindBranch/LocationCard';
import BankMap from '../components/UI/FindBranch/BankMap';
import MapSearchBar from '../components/UI/FindBranch/MapSearchBar';

import wtf_loader from '../assets/wtf_loader.gif';

// must be named 'libraries'
const libraries = ['places'];

const initCenter = {
  lat: 36.114647,
  lng: -115.172813,
};

const FindBranch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requestedPlaces, setRequestedPlaces] = useState([]);

  const mapRef = useRef();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const loadPlaces = useCallback((map) => {
    mapRef.current = map;

    const initLocReq = newCoordsReq(initCenter.lat, initCenter.lng);
    const locMarkers = gMapsService(map, initLocReq);

    setRequestedPlaces(locMarkers);
    setIsLoading(false);
  }, []);

  const panTo = useCallback((lat, lng) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(11);

    const searchReq = newCoordsReq(lat, lng);
    const locMarkers = gMapsService(mapRef.current, searchReq);

    setRequestedPlaces(locMarkers);
  }, []);

  if (!isLoaded) {
    return 'Loading maps';
  }

  if (loadError) {
    return 'Error loading maps';
  }

  return (
    <Container>
      <div className='find-branch'>
        {isLoading && (
          <img src={wtf_loader} className='loader' alt='Loading page' />
        )}
        <h1 className='find-branch--title'>Find A Branch Near You</h1>
        <h2 className='find-branch--subtitle'>
          <i>ATMs conveniently located inside of every casino!</i>
        </h2>
        <Row>
          <Col xs={12}>
            <div className='find-branch--search-bar'>
              <MapSearchBar panTo={panTo} center={initCenter} />
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 3 }}
            xl={{ span: 5, order: 1 }}
            className='find-branch--places'
          >
            {requestedPlaces.map((place) => (
              <LocationCard
                key={place.place_id}
                name={place.name}
                status={place.business_status.replace('_', ' ')}
                icon={place.icon}
                rating={convertRating(place.rating)}
                address={place.formatted_address}
              />
            ))}
          </Col>
          <Col xs={12} xl={{ span: 7, order: 2 }} className='find-branch--map'>
            <BankMap
              initCenter={initCenter}
              panTo={panTo}
              loadPlaces={loadPlaces}
              requestedPlaces={requestedPlaces}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FindBranch;
