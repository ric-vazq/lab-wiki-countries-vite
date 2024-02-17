import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function CountryDetails() {
  const [countryData, setCountryData] = useState({});
  const [borderData, setBorderData] = useState([]);
  let { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      const data = await response.data;
      setCountryData({
        name: data.name.common,
        capital: data.capital,
        area: data.area,
      });
      setBorderData(data.borders);
    };

    fetchData().catch(console.error);
  }, [countryId]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{countryData.name}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="list-group">
                {borderData.map((border) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      key={border}
                      to={`/${border}`}
                    >
                      {border}
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CountryDetails;
