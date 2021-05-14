import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Today from "./Today";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      date: new Date(response.data.dt * 1000)
    });
  }


  function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(handleResponse);
}

  function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

  function search() {
  let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          id="search-city-form"
          type="search"
          placeholder="Search city"
          aria-label="Search"
          autoFocus="on"
          onChange={handleCityChange}
        />
      </form>
    </div>
        <div className="col-3">
      <button onClick={getCurrentPosition}>Current location</button>
    </div>
      </div> 
  <h3><CurrentDate date={weatherData.date} /> </h3>
  </div>
          <Today data={weatherData} />
          <Forecast />
  </div>
  ); 
} else {   
  search();

  return "Loading..."
}


}
