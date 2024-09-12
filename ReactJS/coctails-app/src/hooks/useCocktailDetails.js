import { useEffect, useState } from "react";

const useCocktailDetails = (id) => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktail = () => {
      setLoading(true);
      fetch(`${import.meta.env.VITE_COCKTAIL_API_URL}/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCocktail(data.drinks[0]);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    };
    fetchCocktail();
  }, [id]);
  return {
    cocktail,
    loading,
    error,
  };
};

export default useCocktailDetails;
