import { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ countryCapital }) => {
  const [weather, setWeather] = useState({});

  const api_key = import.meta.env.VITE_WEATHER_API.replaceAll('"', '');

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${countryCapital}`
      )
      .then((response) => {
        setWeather(response.data);
        //console.log(response.data);
      });
  }, []);

  if (Object.keys(weather).length > 0) {
    return (
      <>
        <h2>Weather in {countryCapital}</h2>
        <p>
          <strong>Temperature: </strong>
          {weather.current.temperature} Celsius
        </p>
        <img
          src={weather.current.weather_icons[0]}
          alt={weather.current.weather_descriptions[0]}
        />
        <p>
          <strong>Wind: </strong>
          {weather.current.wind_speed} Km/h direction {weather.current.wind_dir}
        </p>
      </>
    );
  } else {
    return (<p>No weather info</p>)
  }
};
