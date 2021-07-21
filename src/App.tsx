import React from 'react';
import './App.css';
import Quotes from './Components/Quotes/Quotes';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import { fetchAllQuotes } from './Services/QuoteServices';
import { fetchAllWeather } from './Services/WeatherServices';

// MATERIAL UI 
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';




// MATERIAL UI

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
      
        <WeatherForecast />
        <Quotes />
      </div>
    </React.Fragment>
    
  );
}

export default App;
