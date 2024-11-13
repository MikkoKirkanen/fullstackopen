import Button from "react-bootstrap/Button";

const List = ({ countriesToShow, currentCountry, showCountryInfo }) => {
  const getClass = (country) =>
    currentCountry?.name?.common === country?.name?.common ? "active" : "";

  return (
    <div className="country-list">
      {countriesToShow.map((country) => (
        <Button
          key={country.name.common}
          variant="outline-primary"
          className={getClass(country)}
          onClick={() => showCountryInfo(country)}
        >
          {country.name.common}
        </Button>
      ))}
    </div>
  );
};

export default List;
