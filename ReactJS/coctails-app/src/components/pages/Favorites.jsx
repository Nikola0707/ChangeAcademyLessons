import useFavoritesStore from "../../store/useFavoritesStore";
import CocktailCard from "../CocktailCard";
import Navbar from "../Navbar";

const Favorites = () => {
  const { favorites = [] } = useFavoritesStore();

  console.log("favorites", favorites.length);
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Fovorites Cocktails
          </h1>
        </header>
        {favorites.length === 0 ? (
          <h1>No Favorites</h1>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((cocktail) => (
              <CocktailCard cocktail={cocktail} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};
export default Favorites;
