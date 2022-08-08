import {
  useState,
  useEffect,
  useRef,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { convertRating } from '../helpers/Helpers';
import wtf_loader from '../assets/wtf_loader.gif';

import LocationCard from '../components/FindBranch/LocationCard';
import classes from './FindBranch.module.css';

const MapSearchBar = lazy(() =>
  import('../components/FindBranch/MapSearchBar')
);

const BankMap = lazy(() => import('../components/FindBranch/BankMap'));

const libraries = ['places'];
const center = {
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
      location: center,
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
    <Container className={classes.layout}>
      {isLoading && (
        <img src={wtf_loader} className={classes.loader} alt='Loading page' />
      )}
      <h1 className={classes.title}>Find A Branch Near You</h1>
      <h2 className={classes.subtitle}>
        <i>ATMs conveniently located inside of every casino!</i>
      </h2>
      <Row>
        <Col xs={12} className={classes.search}>
          <Suspense fallback={wtf_loader}>
            <MapSearchBar panTo={panTo} center={center} />
          </Suspense>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          xl={{ span: 5, order: 1 }}
          className={classes.returns}
        >
          {requestedPlaces.map((place) => (
            <LocationCard
              key={uuidv4()}
              name={place.name}
              status={place.business_status.replace('_', ' ')}
              icon={place.icon}
              rating={convertRating(place.rating)}
              address={place.formatted_address}
            />
          ))}
        </Col>
        <Col xs={12} xl={{ span: 7, order: 2 }} className={classes.map}>
          <Suspense fallback={wtf_loader}>
            <BankMap
              panTo={panTo}
              loadPlaces={loadPlaces}
              requestedPlaces={requestedPlaces}
            />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default FindBranch;
