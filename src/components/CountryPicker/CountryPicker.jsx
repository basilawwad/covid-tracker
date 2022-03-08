import { useState, useEffect } from 'react';
import { getCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const fetchedData = await getCountries();

      setCountries(fetchedData);
    }

    fetchMyAPI();
  }, []);

  return (
    <FormControl>
      <NativeSelect onChange={handleCountryChange}>
        <option className={styles.formControl}>Global</option>
        {countries.map(({ name }, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
