import { useEffect, useState } from 'react'
import axios from 'axios';
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/CountryPicker/Chart'
import Cards from './components/CountryPicker/Cards'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/countries')
      .then(response => setCountries(response.data.countries))
    }, [])

  return (
    <div className="App">
      <header className="App-header">
      <CountryPicker countries= {countries}/>
      <Chart />
      <Cards />
      <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
