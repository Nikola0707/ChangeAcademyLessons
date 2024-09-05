import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {isLogin ? <Login /> : <SignUp />}

        <div className="mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login!"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
