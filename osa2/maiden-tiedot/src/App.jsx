import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { getAll } from "./services/countries";
import { fetchWeather } from "./services/weather";
import Find from "./components/Find";
import List from "./components/List";
import Info from "./components/Info";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [find, setFind] = useState("");
  const [showInfo, setShowInfo] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    getAll().then((countries) => {
      setAllCountries(countries);
    });
  }, []);

  const onFindChange = (event) => {
    const value = event.target.value;
    setFind(value);
    filterCountries(value);
  };

  const showCountryInfo = (country) => {
    setShowInfo(country);
    getWeather(country);
  };

  const getWeather = (country) => {
    const pos = {
      lat: country.capitalInfo.latlng?.[0],
      lon: country.capitalInfo.latlng?.[1],
    };
    fetchWeather(pos).then((data) => {
      setWeatherData(data);
    });
  };

  const filterCountries = (value) => {
    const regexp = new RegExp(value.trim(), "i");
    const countries =
      value.trim() === ""
        ? []
        : allCountries.filter((country) => regexp.test(country.name.common));

    // If countries length is 1 then show first item info
    if (countries.length === 1) {
      showCountryInfo(countries[0]);
    }
    setCountriesToShow(countries);
  };
  const isCountriesLimit = countriesToShow.length > 10;

  return (
    <div className="container">
      <div className="countries-content">
        <Find value={find} onFindChange={onFindChange} />
        {isCountriesLimit ? (
          <div>Too many</div>
        ) : (
          <List
            countriesToShow={countriesToShow}
            currentCountry={showInfo}
            showCountryInfo={showCountryInfo}
          />
        )}
      </div>
      {showInfo ? <Info country={showInfo} weatherData={weatherData} /> : null}
    </div>
  );
};

export default App;
