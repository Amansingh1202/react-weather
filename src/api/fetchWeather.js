import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '3a3b45c17954e5987e187559463cc8b4';

export const fetchWeather = async(query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}