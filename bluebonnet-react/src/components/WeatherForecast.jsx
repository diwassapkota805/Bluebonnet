import React from "react";
import "./WeatherForecast.css";

// Component for displaying weather forecast information
const WeatherForecast = ({ weather }) => {
  return (
    <div className="weather-forecast cc">
      <p className="day">{weather.day}</p>
      <img src={weather.icon} alt={weather.conditions} />
      <p className="low">Low: {weather.low}</p>
      <p className="high">High: {weather.high}</p>
    </div>
  );
}

export default WeatherForecast;
