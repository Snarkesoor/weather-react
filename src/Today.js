import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./Today.css";

export default function Today(props) {
  return (
    <div className="today">
      <p className="date-today">Today's weather:<sup className="converter">
         <span className="temp-celsius" id="cel">
            {" "}°C
          </span>{" "}
          |
          <span className="temp-fahrenheit" id="far">
            °F
          </span>
        </sup> </p>

      <p className="temp-today">
        <WeatherIcon code={props.data.icon}/>
        <br />
        <span className="temp">{props.data.temperature}</span>° 
      </p>
      <ul className="weather-details">
        <li>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </li>
        <li>
          Wind speed: <span id="wind">{props.data.wind}</span>km/h
        </li>
      </ul>
    </div>
  );
}
