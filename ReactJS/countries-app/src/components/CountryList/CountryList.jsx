import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CountryList.module.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const getDisplayName = (name) => {
    return name === "North Macedonia" ? "Macedonia" : name;
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Failed to fetch countries!");
        }

        const data = await response.json();

        // console.log("res", response);
        // console.log("data", data);
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCountries();
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error loading countries: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for country"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      <div className={styles.countriesGrid}>
        {filteredCountries.map((country) => (
          <Link
            to={`/country/${getDisplayName(country.name.common)}`}
            key={country.name.common}
            className={styles.countryCard}
          >
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className={styles.flag}
            />
            <h2 className={styles.countryName}>
              {getDisplayName(country.name.common)}
            </h2>
            <p className={styles.countryRegion}>{country.region}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CountryList;
