import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await axiosInstance.post("/login", {
      username,
      password,
    });

    login(response.data.accessToken);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen
    bg-gray-100">
      <div className="p-6 shadow-lg rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="text-white p-2 w-full rounded border border-gray-300 hover:bg-gray-200 bg-blue-500"        >
          Login
        </button>
      </div>
    </div>
  );
};
