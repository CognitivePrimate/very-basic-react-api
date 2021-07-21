import axios from "axios";

const WeatherAPIURL: string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";

// ADD TYPE BELOW
export const fetchAllWeather = () => {
    return axios.get(WeatherAPIURL).then((response) => {
        return response.data; 
    })
}

export const fetchWeatherPeriods = () => {
    return axios.get(WeatherAPIURL).then((response) => {
        return response.data.properties.periods
    })
}