import { Link } from "react-router-dom";
function CountriesList(props) {
  const { countries } = props;
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            className="list-group-item list-group-item-action"
            key={country._id}
            to={`/${country.alpha3Code}`}
          >
            {" "}
            <img
              style={{ height: "16px", width: "auto" }}
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flagEmoji"
            />{" "}
            {country.name.common}
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
