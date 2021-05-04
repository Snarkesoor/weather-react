import React from "react";
import "./Header.css";

export default function Header() {
  let city = "Amsterdam";

  return (
    <div className="col-6">
      <h1>
        <span id="h1city">{city}</span>{" "}
        <sup className="converter">
         <span className="temp-celsius" id="cel">
            °C
          </span>{" "}
          |
          <span className="temp-fahrenheit" id="far">
            °F
          </span>
        </sup>
      </h1>
      <h3>Last updated: Tuesday, 20:38</h3>
    </div>
  );
}
