import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Sol Delgadillo and is{" "}
          <a
            href="https://github.com/soledelgadillo/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          and{" "}
          <a
            href="https://infallible-lichterman-eea63d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
