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

import classes from './MapSearchBar.module.css';

const MapSearchBar = (props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => props.center.lat,
        lng: () => props.center.lng,
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
          props.panTo({ lat, lng });
        } catch (error) {
          console.log('Error');
        }
      }}
    >
      <ComboboxInput
        className={classes.input}
        value={value}
        disabled={!ready}
        placeholder='Enter an address'
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <h4 className={classes['results-message']}>
        Returning the top 20 results within 5 miles
      </h4>
      <ComboboxPopover className={classes.popover}>
        <ComboboxList>
          {status === 'OK' &&
            data.map((suggestion) => (
              <ComboboxOption
                className={classes.option}
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
