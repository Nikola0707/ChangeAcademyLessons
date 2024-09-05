import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-4">
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
        className="w-full p-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};
export default Login;
