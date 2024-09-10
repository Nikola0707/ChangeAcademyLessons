const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL_PRODUCTION;

// Function to handle user registration
export const register = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to handle use login
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Login Failed!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signOut = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
