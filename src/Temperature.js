import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Temperature.css";

export default function Temperature(props) {
const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
}

if (unit === "celsius") {
    return   (  <div className="today">
      <p className="date-today">Today's weather:
        <sup className="converter"> {" "}
        <span className="temp-celsius">
            °C
          </span>{" "}
          | {" "}
          <a href="/" className="temp-link" onClick={convertToFahrenheit}>
            °F
          </a>
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
    </div> )
    } else { return (
    <div className="today">
      <p className="date-today">Today's weather:
        
<sup className="converter"> {" "}
        <a href="/" className="temp-link" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | {" "}
          <span className="temp-fahrenheit" >
            °F
          </span>
          </sup> </p>
      <p className="temp-today">
        <WeatherIcon code={props.data.icon}/>
        <br />
        <span className="temp">{Math.round(props.data.temperature * 1.8 + 32)}</span>° 
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

    )
    }
}

