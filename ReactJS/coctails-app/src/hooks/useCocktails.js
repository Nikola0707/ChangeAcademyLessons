import { useEffect, useState } from "react";

const useCocktails = (type) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        // Fetch cocktails data from the API using the type parameter ("Alcoholic/non-Alcoholic")
        const response = await fetch(
          `${import.meta.env.VITE_COCKTAIL_API_URL}/filter.php?a=${type}`
        );
        // Parse the response as JSON
        const data = await response.json();
        // Update the state with the fetched list of cocktails
        setCocktails(data.drinks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCocktails();
  }, [type]);

  return {
    cocktails,
    loading,
    error,
  };
};

export default useCocktails;
