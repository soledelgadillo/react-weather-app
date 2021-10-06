import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForescast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "3b3488bec2b782dc10ae81e429f8a644";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}long=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19</span> |
            <span className="WeatherForecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
