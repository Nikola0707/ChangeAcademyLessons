import { useState } from "react";
import { register } from "../helpers/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setErrorMessage("");
    try {
      await register(email, password); // Call register function with email and password
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Sign up failed! Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        aria-label="Email"
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      {/* Password input field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        aria-label="Password"
        className="w-full p-2 border border-gray-300 rounded-md"
        // minLength={6}
      />
      <button
        type="submit"
        className={`w-full py-2 rounded-md ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};
export default SignUp;
