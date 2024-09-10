import { useState } from "react";
import { login } from "../helpers/auth";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const { token, user } = await login(email, password);
      setUser(user);
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentionals!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className={`w-full py-2 rounded-md ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
export default Login;
