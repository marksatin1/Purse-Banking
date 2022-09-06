import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { v4 as uuidv4 } from 'uuid';

const MapSearchBar = ({ center, panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => center.lat,
        lng: () => center.lng,
      },
      radius: 20000,
    },
  });

  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.error('Error');
        }
      }}
    >
      <ComboboxInput
        className='input'
        value={value}
        disabled={!ready}
        placeholder='Enter an address'
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <h3 className='results-message'>
        Returning the top 20 results within 5 miles
      </h3>
      <ComboboxPopover className='popover'>
        <ComboboxList>
          {status === 'OK' &&
            data.map((suggestion) => (
              <ComboboxOption
                className='option'
                key={uuidv4()}
                value={suggestion.description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default MapSearchBar;
