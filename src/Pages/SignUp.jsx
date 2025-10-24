import React, { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate, Link } from "react-router-dom"; // ✅ Added Link import

const SignUp = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData);
    if (result.success) {
      setMessage("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 1500); // ✅ Redirect to login after signup
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-md w-80"
      >
        <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
        {message && <p className="text-green-600">{message}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
