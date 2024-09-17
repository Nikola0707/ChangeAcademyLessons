import { Navigate } from "react-router-dom";

const PublicRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return !token ? element : <Navigate to="/home" />;
};
export default PublicRoute;
