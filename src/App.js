import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import DropDown from './components/DropDown'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/countries')
      .then(response => setCountries(response.data.countries))
    }, [])

  return (
    <div className="App">
      <header className="App-header">
      <DropDown countries= {countries}></DropDown>
      <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
