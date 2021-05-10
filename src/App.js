import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Header from "./Header";
import Form from "./Form";
import Button from "./Button";
import Today from "./Today";
import Forecast from "./Forecast"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="row">
            <Header />
            <Form />
            <Button />
          </div>
          <Today />
          <Forecast />
          <footer className="footer"><a href="https://github.com/Snarkesoor/weather-react" rel="noreferrer" target="_blank">Open-source code</a> by Marloes Oomen 👩🏼‍💻</footer>
        </div>
      </div>
    </div>
  );
}

