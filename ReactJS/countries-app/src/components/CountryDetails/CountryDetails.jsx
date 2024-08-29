import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  console.log("params", countryName);
  const [country, setCountry] = useState(null);

  const getDisplayName = (name) => {
    return name === "North Macedonia" ? "Macedonia" : name;
  };

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries!");
        }
        const data = await response.json();
        console.log("data", data[0]);
        setCountry(data[0]);
      } catch (error) {
        console.error(`Error fetching country: ${error}`);
      }
    };
    fetchCountry();
  }, [countryName]);

  if (!country) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{getDisplayName(country.name.common)}</h1>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
    </div>
  );
};

export default CountryDetails;
