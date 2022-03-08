import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import { fetchData } from './api/index';
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://covid19.mathdro.id/api/countries')
      .then((response) => setCountries(response.data.countries));
  }, []);

  useEffect(
    () => async () => {
      const data = await fetchData;

      console.log(data);
    },
    []
  );

  return (
    <div className={styles.container}>
      <CountryPicker countries={countries} />
      <Chart />
      <Cards />
    </div>
  );
}

export default App;
