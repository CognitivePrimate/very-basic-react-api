import React from 'react';
import './App.css';
import Quotes from './Components/Quotes/Quotes';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import { fetchAllQuotes } from './Services/QuoteServices';
import { fetchAllWeather } from './Services/WeatherServices';

function App() {
  return (
    <div className="App">
      <WeatherForecast />
      <Quotes />
      
    </div>
  );
}

export default App;
