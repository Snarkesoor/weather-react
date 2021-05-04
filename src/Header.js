import React from "react";
import "./Header.css";

export default function Header() {
  let city = "Amsterdam";

  return (
    <div className="col-6">
      <h1>
        <span id="h1city">{city}</span>{" "}
        <sup className="converter">
          <a className="temp-celsius" id="cel" href="">
            °C
          </a>{" "}
          |
          <a className="temp-fahrenheit" id="far" href="">
            °F
          </a>
        </sup>
      </h1>
      <h3></h3>
    </div>
  );
}
