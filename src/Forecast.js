import axios from "axios";
import React, { useState }  from "react";
import "./Forecast.css";
import OneDay from "./OneDay";

export default function Forecast(props) {

  let [loaded,setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
  return (
  <div className="row" id="forecast">
    {forecastData.map(function(dailyForecast, index) {
      if (index <5) {
      return ( <div className="col" key={index}>
         <OneDay data={dailyForecast} />
         </div>  );
      }
      })}
   </div>
   )
} else {
  let lat = props.data.coord.lat;
  let lon = props.data.coord.lon;
    let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

return null;
}
}