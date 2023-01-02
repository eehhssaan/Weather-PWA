import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "45ff0e84b4beec3b3649c6e1cf871d6f";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
