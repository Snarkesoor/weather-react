import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Today from "./Today";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000)
    });
  }
  
  if (weatherData.ready) {
  
  return ( <div><div>
  <div className="row">
    <div className="col-6">
      <h1>
        <span id="h1city">{weatherData.city}</span>
              </h1>

    </div>

      <div className="col-3">
      <form className="d-flex">
        <input
          className="form-control me-2"
          id="search-city-form"
          type="search"
          placeholder="Search city"
          aria-label="Search"
          autoFocus="on"
        />
      </form>
    </div>
        <div className="col-3">
      <button>Current location</button>
    </div>
      </div> 
  <h3><CurrentDate date={weatherData.date} /> </h3>
  </div>
          <Today data={weatherData} />
          <Forecast />
  </div>
  ); 
} else {   
  let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}


}
