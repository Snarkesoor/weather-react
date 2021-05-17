import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
    return           <div className="row" id="forecast">
                <div className="col">

                  <p className="date">1 May:</p>
                  <p className="temp-small">
                  <WeatherIcon code={props.data.icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >18°</span>|<span className="min"
                  >12</span>°</p>
              </div>
                <div className="col">

                  <p className="date">2 May:</p>
                  <p className="temp-small">
                  <WeatherIcon code={props.data.icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >18°</span>|<span className="min"
                  >12</span>°</p>
              </div>
                <div className="col">

                  <p className="date">3 May:</p>
                  <p className="temp-small">
                  <WeatherIcon code={props.data.icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >18°</span>|<span className="min"
                  >12</span>°</p>
              </div>
                <div className="col">

                  <p className="date">4 May:</p>
                  <p className="temp-small">
                  <WeatherIcon code={props.data.icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >18°</span>|<span className="min"
                  >12</span>°</p>
              </div>
                <div className="col">

                  <p className="date">5 May:</p>
                  <p className="temp-small">
                  <WeatherIcon code={props.data.icon} size={80} color={"#FAB578"}/><br /><span className="max"
                  >18°</span>|<span className="min"
                  >12</span>°</p>
              </div>

          </div>
}