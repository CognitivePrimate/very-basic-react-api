import { useEffect, useState } from "react";

// import css
import "./WeatherForecast.css";

// import api
import {fetchWeatherPeriods} from "../../Services/WeatherServices";

// MATERIAL UI
import Button from "@material-ui/core/Button";


// MATERIAL UI


const WeatherForecast = () => {
    const [weatherList, setWeather] = useState<any[]>([]);

    useEffect(() => {
        fetchWeatherPeriods().then((data) => {
            // console.log(data);
            setWeather(data);
        })
    }, []);

    console.log(weatherList);

    return(
       
        <div className="weatherWrapper">
            <h1>Weather Forecast</h1>
            {weatherList.map((period, index) => {
                return <div className="weatherContentCard" key={`${period.number}-${period.name}-${index}`}>
                    <div className="cardHeader">
                        <h3>{period.name}</h3>
                        <h4>{period.temperature}</h4>
                    </div>
                    <h5 className="shortForecast">{period.shortForecast}</h5>
                    <div className="imageBox">
                        <img src={period.icon} alt="weather-icon"/>
                    </div>
                    <Button variant="contained" color="primary">Detailed Forecast</Button>
                    <div className="longForecastContainer">
                        <p className="longForecast">{period.detailedForecast}</p>
                    </div>
                </div>
            })}
            
        </div>
    )


}



export default WeatherForecast;