import { useEffect, useState } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import { fetchData } from './api/index';
function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetchMyAPI();
  }, []);

  const handleCountryChange = () => {
    console.log(event.target.value);
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
