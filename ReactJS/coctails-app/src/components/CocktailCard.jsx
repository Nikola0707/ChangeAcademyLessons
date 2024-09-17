import { FaHeart, FaHeartBroken } from "react-icons/fa";
import useFavoritesStore from "../store/useFavoritesStore";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  const { favorites = [], addFavorite, removeFavorite } = useFavoritesStore();
  console.log("favorites", favorites);

  const isFavorite =
    Array.isArray(favorites) &&
    favorites.some((favorite) => favorite.idDrink === cocktail.idDrink);

  const toggleFavorite = () =>
    isFavorite ? removeFavorite(cocktail.idDrink) : addFavorite(cocktail);

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 text-center">
      <button
        onClick={toggleFavorite}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaHeartBroken className="w-8 h-8 text-red-700" />
        ) : (
          <FaHeart className="w-8 h-8 text-gray-500" />
        )}
      </button>
      <Link to={`/cocktail/${cocktail.idDrink}`}>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
        <h3 className="text-xl font-medium">{cocktail.strDrink}</h3>
      </Link>
    </div>
  );
};

export default CocktailCard;
