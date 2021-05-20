import axios from "axios";
import React, { useState }  from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {

  let [loaded,setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function day() {
    let date = new Date(forecastData[0].dt * 1000);

    let dayNumber = date.getDate();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[date.getMonth()];

    return `${dayNumber} ${month}`;
  }
  
  if (loaded) {
  return (<div className="row" id="forecast">
                <div className="col">

                  <p className="date">{day()}</p>
                  <p className="temp-small">
                  <WeatherIcon code={forecastData[0].weather[0].icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >{Math.round(forecastData[0].temp.max)}°</span>|<span className="min"
                  >{Math.round(forecastData[0].temp.min)}</span>°</p>
              </div>
   </div>)
} else {
  let lat = props.data.coord.lat;
  let lon = props.data.coord.lon;
    let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

return null;
}
}