import Table from "react-bootstrap/Table";
import arrowDown from "../assets/arrow-down.svg"

const Weather = ({ weatherData, capital }) => {
  const weather = weatherData.weather[0];

  /**
   * Returns the local time
   * @param {number} time 
   * @returns local time
   */
  const getTime = (time) => {
    const localTimeStamp = time + weatherData.timezone + (new Date()).getTimezoneOffset() * 60;
    // Convert localTimeStap in seconds to milliseconds
    const date = new Date(localTimeStamp * 1000);
    return date.toTimeString().slice(0, 5);
  }

  const getWindDirection = () => {
    return {transform: `rotate(${weatherData.wind.deg}deg)`}
  }

  return (
    <div>
      <h4>Weather of {capital}</h4>
      <div className="weather-container">
        <div className="weather-content">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          />
        </div>
      </div>
      <p>
        <span className="fw-bold">{weather.main}:</span> {weather.description}
      </p>

      <Table striped bordered size="sm">
        <tbody>
          <tr>
            <td>Temperature:</td>
            <td>{weatherData.main.temp.toLocaleString()} &deg;C</td>
          </tr>
          <tr>
            <td>Wind:</td>
            <td>{weatherData.wind.speed} m/s <img className="ms-2" style={getWindDirection()} src={arrowDown} /></td>
          </tr>
          <tr>
            <td>Feels like:</td>
            <td>{weatherData.main.feels_like.toLocaleString()} &deg;C</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{weatherData.main.humidity} %</td>
          </tr>
          <tr>
            <td>Sunrise:</td>
            <td>{getTime(weatherData.sys.sunrise)}</td>
          </tr>
          <tr>
            <td>Sunset:</td>
            <td>{getTime(weatherData.sys.sunset)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Weather;
