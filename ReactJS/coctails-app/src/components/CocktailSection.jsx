import { Link } from "react-router-dom";

const CocktailSection = ({ title, cocktails, loading, error }) => {
  // console.log(`${title}`, cocktails);
  return (
    <section className="mt-8">
      {loading && (
        <p className="text-center text-lg font-medium text-gray-600">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-center text-lg font-medium text-red-700">
          Error loading {title.toLowerCase()} cocktails
        </p>
      )}

      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-600 text-white rounded-lg p-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cocktails.map((cocktail) => (
          <Link
            to={`/cocktail/${cocktail.idDrink}`}
            key={cocktail.idDrink}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cocktail.strDrink}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CocktailSection;
