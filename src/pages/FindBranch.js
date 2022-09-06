import { useState, useRef, useCallback } from 'react';

import { convertRating } from '../helpers/functions/MiscFunctions';
import { useLoadScript } from '@react-google-maps/api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationCard from '../components/UI/FindBranch/LocationCard';
import BankMap from '../components/UI/FindBranch/BankMap';
import MapSearchBar from '../components/UI/FindBranch/MapSearchBar';

import wtf_loader from '../assets/wtf_loader.gif';

const libraries = ['places']; // must be named 'libraries'

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

    const bankRequest = {
      location: initCenter,
      radius: '8000',
      query: 'bank',
      fields: ['name', 'geometry'],
    };

    const markers = [];
    const service = new window.google.maps.places.PlacesService(map);
    service.textSearch(bankRequest, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (const key in results) {
          markers.push(results[key]);
        }
        setRequestedPlaces(markers);
        setIsLoading(false);
      } else {
        console.log('Error with google maps service');
      }
    });
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(11);

    const newCoordsRequest = {
      location: { lat, lng },
      radius: '8000',
      query: 'ATM',
      fields: ['name', 'geometry'],
    };

    const markers = [];
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    service.textSearch(newCoordsRequest, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (const key in results) {
          markers.push(results[key]);
        }
        setRequestedPlaces(markers);
      } else {
        console.log('Error with google maps service');
      }
    });
  }, []);

  if (!isLoaded) {
    return 'Loading maps';
  }

  if (loadError) {
    return 'Error loading maps';
  }

  return (
    <Container className='find-branch'>
      <h1 className='find-branch--title'>Find A Branch Near You</h1>
      <h2 className='find-branch--subtitle'>
        <i>ATMs conveniently located inside of every casino!</i>
      </h2>
      <Row>
        <div className='find-branch--search-bar'>
          <MapSearchBar panTo={panTo} center={initCenter} />
        </div>
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
      {isLoading && (
        <img src={wtf_loader} className='wtf-loader' alt='Loading page' />
      )}
    </Container>
  );
};

export default FindBranch;
