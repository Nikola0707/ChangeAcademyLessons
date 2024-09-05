import { useCallback, useEffect, useState } from "react";

export const useFetchCountry = (countryName) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("countryName", countryName);
  const apiBaseURL = import.meta.env.VITE_BASE_COUNTRIES_API_URL;
  const apiCountryByName = import.meta.env.VITE_API_COUNTRY_BY_NAME.replace(
    "{countryName}",
    countryName
  );

  // useCallback to memoize the fetchCountry function
  // This means fetchCountry will only be recreated if countryName changes
  const fetchCountry = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // const response = await fetch(
      //     `https://restcountries.com/v3.1/name/${countryName}`
      //   );
      // Using env variables
      //   const response = await fetch(`${apiBaseURL}${apiCountryByName}`);
      const response = await fetch(`${apiBaseURL}/name/${countryName}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      // Parse the JSON data from the response
      const data = await response.json();
      setCountry(data[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [countryName]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  return {
    country,
    loading,
    error,
  };
};
