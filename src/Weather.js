import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let city = "Amsterdam";

  let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return ( <div>
  <div className="row">
    <div className="col-6">
      <h1>
        <span id="h1city">{city}</span>
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
  <h3>Last updated: Tuesday, 20:38</h3>
  </div>
  );
}
