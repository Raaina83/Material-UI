import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({city: "Delhi",
    feelsLike: 24.5,
    temp: 25,
    tempMin: 25,
    tempMax: 25,
    humidity: 27,
    weather: "smoke"});

    let updateWeather = (result) =>{
        setWeatherInfo(result);
    };

    return(
        <div>
            <h2>Weather App!</h2>
            <SearchBox updateWeather={updateWeather}></SearchBox>
            <br></br>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}