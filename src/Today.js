import React from "react";
import "./Today.css";

export default function Today() {
  let weatherToday = {
    temperature: 15,
    minimum: 5,
    humidity: 80,
    windSpeed: 5
  };
  return (
    <div className="today">
      <p className="date-today">Today's weather:</p>

      <p className="temp-today">
        <img src="" id="icon-1" alt="" width="50px"></img>
        <br />
        <span className="temp">{weatherToday.temperature}</span>° |{" "}
        <span className="min">{weatherToday.minimum}</span>°
      </p>
      <ul className="weather-details">
        <li>
          Humidity: <span id="humidity">{weatherToday.humidity}</span>%
        </li>
        <li>
          Wind speed: <span id="wind">{weatherToday.windSpeed}</span>km/h
        </li>
      </ul>
    </div>
  );
}
