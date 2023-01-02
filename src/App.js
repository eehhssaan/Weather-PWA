import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, SetQuery] = useState("");
  const [weather, SetWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      SetWeather(data);
      SetQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          SetQuery(e.target.value);
        }}
        onKeyDown={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup> {weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>°C</sup>
          </div>
          <div className="info">
            <img
              alt={weather.weather[0].description}
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
