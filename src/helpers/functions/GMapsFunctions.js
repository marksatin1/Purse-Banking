export const newCoordsReq = (lat, lng) => {
  const request = {
    location: { lat, lng },
    radius: '8000',
    query: 'ATM',
    fields: ['name', 'geometry'],
  };
  return request;
};

export const gMapsService = (mapInst, requestParams) => {
  const locMarkers = [];

  const service = new window.google.maps.places.PlacesService(mapInst);
  service.textSearch(requestParams, (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      for (const loc in results) {
        locMarkers.push(results[loc]);
      }
    } else {
      console.error('Error with google maps service');
    }
  });
  return locMarkers;
};
