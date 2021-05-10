import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name
    });
    setReady(true);
  }
  
  if (ready) {
  
  return ( <div>
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
  <h3>The current temperature is: {Math.round(weatherData.temperature)}°C</h3>
  </div>
  ); 
} else {   
  let city = "Amsterdam";
  let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}


}
