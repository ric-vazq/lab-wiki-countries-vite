import axios from "axios";
import { useState, useEffect } from "react";
import CountriesList from "../components/CountryList";

async function dataFetch(apiURL) {}

function HomePage() {
  const [fetching, setFetching] = useState(true);
  const [countriesData, setCountriesData] = useState([]);
  const apiURL = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setCountriesData(res.data);
        setFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      {fetching && <p>Loading... </p>}

      <CountriesList countries={countriesData} />
    </div>
  );
}

export default HomePage;
