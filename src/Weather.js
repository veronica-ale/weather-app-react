import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    date: "Monday 19:42",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 82,
    wind: 2,
    temperature: 14,
  };

  return (
    <div className="Weather">
      <div className="container border rounded shadow">
        <div className="row">
          <div className="col-sm-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: {weatherData.date}
                <span></span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <form className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for your city"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Search🔎
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm">
                Current location 📍
              </button>
            </form>
          </div>
        </div>
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
      <div className="footer">
        <i className="fab fa-github"></i>
        <a href="/" target="_blank" rel="noreferrer">
          Open-source code
        </a>
        by Veronica Alessandrini
      </div>
    </div>
  );
}
