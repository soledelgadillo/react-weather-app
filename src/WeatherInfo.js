import React from "react";
import TidyDate from "./TidyDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>

      <ul>
        <li>
          <TidyDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img
                src={props.weatherData.iconUrl}
                alt={props.weatherData.description}
              />
            </div>
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
