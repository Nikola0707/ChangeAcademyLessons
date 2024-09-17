import { useParams } from "react-router-dom";
import useCocktailDetails from "../hooks/useCocktailDetails";
import useFavoritesStore from "../store/useFavoritesStore";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const CocktailDetail = () => {
  const { id } = useParams();
  //   console.log("params", id);
  const { cocktail, loading, error } = useCocktailDetails(id);
  // console.log("cocktail", cocktail);
  const { favorites = [], addFavorite, removeFavorite } = useFavoritesStore();
  console.log("favorites", favorites);
  const isFavorite =
    Array.isArray(favorites) &&
    favorites.some((favorite) => favorite.idDrink === id);

  const toggleFavorite = () =>
    isFavorite ? removeFavorite(id) : addFavorite(cocktail);

  if (loading)
    return <p className="text-center text-3xl font-medium">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-3xl font-medium text-red-600">
        Error loading coctail details!
      </p>
    );

  if (!cocktail) return null; //We can use this one insteaad of the optional chaning operator (?.)

  const ingredients =
    cocktail &&
    Object.keys(cocktail)
      .filter((key) => key.startsWith("strIngredient") && cocktail[key])
      .map((key) => {
        const index = key.replace("strIngredient", "");
        return {
          ingredient: cocktail[key],
          measure: cocktail[`strMeasure${index}`] || "No measure provided!",
        };
      });

  // console.log("ingredients", ingredients);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-10 relative">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        {cocktail?.strDrink}
      </h1>

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

      <div className="flex flex-col md:flex-row md:space-x-8">
        <img
          src={cocktail?.strDrinkThumb}
          alt={cocktail?.strDrink}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-6 md:mb-0"
        />
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-black text-gray-900">Category: {""}</span>
            {cocktail?.strCategory}
          </p>

          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-black text-gray-900">Alcoholic: {""}</span>
            {cocktail?.strAlcoholic}
          </p>

          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-black text-gray-900">Glass: {""}</span>
            {cocktail?.strGlass}
          </p>

          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-black text-gray-900">Instructions: {""}</span>
            {cocktail?.strInstructions}
          </p>

          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              <span className="font-black text-gray-900">
                Ingredients: {""}
              </span>
            </p>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index} className="list-disc pl-3">
                  <span className="font-medium">{ingredient?.ingredient}</span>{" "}
                  {""}
                  {ingredient.measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CocktailDetail;
