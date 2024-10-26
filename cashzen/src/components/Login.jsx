// client/src/Login.js
import React, { useState } from "react";
import api from "../api";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", form);
      localStorage.setItem("token", response.data.token); // Store JWT token for later requests
      if (response.status === 200){
        alert("Login successful!");
        setForm({ username: "", password: "" });
      }
      
    } catch (err) {
      console.error("Error logging in:", err);
      if (err.response) {
        setError(err.response.data || "login failed. Please try again");
      } else {
        setError("Login failed. ");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
    </form>
  );
}

export default Login;
