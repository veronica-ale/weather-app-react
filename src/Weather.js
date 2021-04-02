import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
    });
  }

  if (weatherData.ready) {
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
            Last updated: <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix today-temp">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <strong>{Math.round(weatherData.temperature)}</strong>
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
  } else {
    const apiKey = "9a16a097a91abca0bb210b3d484b70fe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
