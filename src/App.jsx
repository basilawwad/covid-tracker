import { useEffect, useState } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import { fetchData } from './api/index';
function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('Global');

  useEffect(() => {
    async function fetchMyAPI() {
      const fetchedData = country == 'Global' ? await fetchData() : await fetchData(country);
      setData(fetchedData);

      console.log(data);
    }
    fetchMyAPI();
  }, [country]);

  const handleCountryChange = () => {
    setCountry(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
}

export default App;
