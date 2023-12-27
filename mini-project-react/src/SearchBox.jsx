import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
// import SendIcon from '@mui/icons-material/Send';

export default function SearchBox({updateWeather}) {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "cf00d49abe784d6eadab8baf8e8c4119";
    const [city, setCity] = useState("");
    const [error, setError] =useState(false);

    let getWeather = async() =>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            console.log(jsonRes);
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                feelsLike: jsonRes.main.feels_like,
                humidity: jsonRes.main.humidity,
                weather: jsonRes.weather[0].description,
            }
            console.log(result);
            return result;
        }   catch(err){
            throw err;
        }
        
    };

    let inpChange = (e) =>{
        setCity(e.target.value);
    }

    let handleSubmit = async(e) =>{
        try{e.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeather();
            updateWeather(info);
            setError(false);
        } catch(err){
            setError(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={inpChange}/>
            <Button variant="contained" type='submit' className='btn'>
                search
            </Button>
            {error && <p style={{color: "red"}}>NO SUCH PLACE EXISTS!</p>}
            </form>
        </div>
    )
}