import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    date: "Monday 19:35",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 82,
    wind: 2,
    temperature: 14,
  };

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Search for your city"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search🔎"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          Last updated: {weatherData.date}
          <span></span>
        </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="clearfix today-temp">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
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
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} KM/h</li>
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
