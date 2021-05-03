import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp} degrees`);
} 
    let apiKey = "6c12bf653a5233b9ac28d0707b11b7e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse)
    
    return <p> Hello from Weather </p>
}