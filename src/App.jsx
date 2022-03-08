import { useEffect, useState } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import { fetchData, getCountries, getDailyData } from './api/index';
function App() {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const fetchedData = await fetchData();
      const countryData = await getCountries();
      const dailyData = await getDailyData();

      setCountries(countryData);
      setData(fetchedData);

      console.log(dailyData);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className={styles.container}>
      <CountryPicker countries={countries} />
      <Chart />
      <Cards data={data} />
    </div>
  );
}

export default App;
