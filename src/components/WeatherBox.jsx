import React, { useContext } from "react";
import { weatherData } from "../App";

import "./WeatherBox.css";

const WeatherBox = () => {
  const data = useContext(weatherData);

  return (
    <div className="WeatherBox">
      <div>{data?.name}</div>
      <div>
        {data?.main.temp}C / {(data?.main.temp * 1.8 + 32).toFixed(2)}F
      </div>
      <div>{data?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
