import { useParams } from "react-router-dom";
import useCocktailDetails from "../hooks/useCocktailDetails";

const CocktailDetail = () => {
  const { id } = useParams();
  //   console.log("params", id);
  const { cocktail } = useCocktailDetails(id);
  console.log("cocktail", cocktail);
  return <h1>Heloooooo</h1>;
};
export default CocktailDetail;
