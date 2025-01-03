import React from 'react';
import {useWeather} from "../context/Weather";

const Card =()=> {
    const weather = useWeather();
    return (
        <div className='Card'>
            <img src= {weather.data?.current?.condition?.icon}/>
            <h1>{weather.data?.current?.condition?.text}</h1>
          
         
            <h2>{weather.data?.location?.localtime}</h2>
            <h2>{weather.data?.current?.temp_c}°C</h2>
            <h5>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h5>
        </div>
    );
}

export default Card;