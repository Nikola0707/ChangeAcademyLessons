import { useParams } from "react-router-dom";

import styles from "./CountryDetails.module.css";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import { getDisplayName } from "../../helpers/getDisplayName";

const CountryDetails = () => {
  const { countryName } = useParams();
  console.log("params", countryName);

  const { country, loading, error } = useFetchCountry(countryName);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (!country) return null;

  return (
    <div className={styles.countryDetails}>
      <h1>{getDisplayName(country.name.common)}</h1>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <p>
        <span>Region:</span> {country.region}
      </p>
      <p>
        <span>Subregion:</span> {country.subregion}
      </p>
      <p>
        <span>Population:</span> {country.population.toLocaleString()}
      </p>
      <p>
        <span>Capital:</span> {country.capital}
      </p>
      <p>
        <span>Languages:</span> {Object.values(country.languages).join(", ")}
      </p>
    </div>
  );
};

export default CountryDetails;
