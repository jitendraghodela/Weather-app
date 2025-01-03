import React from "react";
import {useWeather} from "../context/Weather";

const Input = () => {
    const weather = useWeather();
    // console.log("Weather" , weather);
  return (
    <div className="Input">
      <input  
      className="input-field"
      placeholder="search city"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)  } />
    </div>
  );
}

export default Input;