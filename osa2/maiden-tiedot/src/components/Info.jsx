import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Weather from "./Weather";

const Info = ({ country, weatherData }) => {
  const getLanguages = () => {
    return Object.values(country.languages || {});
  }

  return (
    <div className="country-info">
      <Card>
        <Card.Header as="h1">{country?.name?.common}</Card.Header>
        <Card.Body>
          <img className="w-100 border mb-3" src={country.flags.svg} />
          <Table striped bordered size="sm">
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{country.capital?.join(", ") || "N/A"}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{country.population?.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{country.area?.toLocaleString()} km&sup2;</td>
              </tr>
              <tr>
                <td>Continent:</td>
                <td>{country.continents?.join(", ")}</td>
              </tr>
              <tr>
                <td>Languages:</td>
                <td>
                  {!getLanguages().length ?
                  "N/A" :
                  (<ul className="mb-0">
                    {getLanguages().map((lang) => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>)
                  }
                </td>
              </tr>
            </tbody>
          </Table>
          {weatherData ? (
            <Weather weatherData={weatherData} capital={country.capital?.[0]} />
          ) : <h4>Weather information is not available</h4>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Info;
