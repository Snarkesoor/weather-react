import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function OneDay(props) {

    function day() {
    let date = new Date(props.data.dt * 1000);

    let dayNumber = date.getDate();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[date.getMonth()];

    return `${dayNumber} ${month}`;
  }
 return    ( 
        <div>    <p className="date">{day()}</p>
             <p className="temp-small">
                  <WeatherIcon code={props.data.weather[0].icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >{Math.round(props.data.temp.max)}°</span>|<span className="min"
                  >{Math.round(props.data.temp.min)}</span>°</p>
                  </div>
 )
                   
}