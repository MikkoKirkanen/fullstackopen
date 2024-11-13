import axios from "axios";

export const fetchWeather = (pos) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  if (!pos.lat || !pos.lon || !apiKey) {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&units=metric&appid=${apiKey}`;

  return axios.get(url).then((resp) => resp.data);
};
