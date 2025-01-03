import { useEffect } from 'react';
import Card from './components/Card'; 
import Button from './components/Button';
import Input from './components/Input';
import './App.css';
import {useWeather} from './context/Weather';

function App() {
 const weather = useWeather();
  console.log("Weather", weather);

useEffect(() => {
  // get current location here
  weather.fetchCurrentUserLocationData();
}, []);

  return (
    <div className="App">
      <header className="App-header">

       <h1>Weather Forcast</h1>
       <Input />
       <Button onClick={weather.fetchData} value="Serach"/>
      <Card />
      </header>
    </div>
  );
}

export default App;
