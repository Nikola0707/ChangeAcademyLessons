import Navbar from "./Navbar";
import CocktailSection from "./CocktailSection";
import useCocktails from "../hooks/useCocktails";

const Home = () => {
  const {
    cocktails: alchocolicCocktails,
    loading: loadingAlchocolic,
    error: errorAlchocolic,
  } = useCocktails("Alcoholic");
  const {
    cocktails: nonAlchocolicCocktails,
    loading: loadingNonAlchocolic,
    error: errorNonAlchocolic,
  } = useCocktails("Non_Alcoholic");

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Available Cocktails
        </h1>
        <CocktailSection
          title={"Alcoholic"}
          cocktails={alchocolicCocktails}
          loading={loadingAlchocolic}
          error={errorAlchocolic}
        />
        <CocktailSection
          title={"Non-Alcoholic"}
          cocktails={nonAlchocolicCocktails}
          loading={loadingNonAlchocolic}
          error={errorNonAlchocolic}
        />
      </div>
    </>
  );
};
export default Home;
