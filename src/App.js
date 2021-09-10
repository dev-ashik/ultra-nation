import './App.css';
import {useEffect, useState} from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
// import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [addedCountry, setAddCountry] = useState([]);

  // useEffect(work , how many time it does cole)
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  } , [])


  const handleAddToCountry = (country) => {
    // console.log(country);
    const NewAddedCountry = [...addedCountry, country];
    setAddCountry(NewAddedCountry)
  }

  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h2>country added: {addedCountry.length}</h2>
      <Cart addedCountry={addedCountry}/>
      {
        countries.map(country => <Country country={country} handleAddToCountry={handleAddToCountry} key={country.alpha3Code}/>)
      }
    </div>
  );
}

export default App;
