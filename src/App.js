import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <p className="date-today">Today's weather in:
         </p> 
          <Weather defaultCity="Amsterdam"/>
          <footer className="footer"><a href="https://github.com/Snarkesoor/weather-react" rel="noreferrer" target="_blank">Open-source code</a> by Marloes Oomen 👩🏼‍💻</footer>
        </div>
      </div>
    </div>
  );
}

