import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className=" bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="mb-6 text-lg text-gray-600">
          Ooops! The page you are looking for dos not exist!
        </p>
        <Link
          to="/home"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
