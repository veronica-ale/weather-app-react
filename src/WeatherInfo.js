import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="clearfix today-temp">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <strong>{Math.round(props.data.temperature)}</strong>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} KM/h</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row weather-forecast">
        <div className="col-sm">
          <h2>Tue</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt=""
          />
          <div className="weather-forecast-temperature">
            <strong>18°</strong> |8°
          </div>
        </div>
        <div className="col-sm">
          <h2>Wed</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt=""
          />
          <div className="weather-forecast-temperature">
            <strong>21°</strong> |9°
          </div>
        </div>
        <div className="col-sm">
          <h2>Thu</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt=""
          />
          <div className="weather-forecast-temperature">
            <strong>18°</strong> |10°
          </div>
        </div>
        <div className="col-sm">
          <h2>Fri</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt=""
          />
          <div className="weather-forecast-temperature">
            <strong>17°</strong> |8°
          </div>
        </div>
        <div className="col-sm">
          <h2>Sat</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt=""
          />
          <div className="weather-forecast-temperature">
            <strong>21°</strong> |10°
          </div>
        </div>
      </div>
    </div>
  );
}