import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/authThunk";
import { closeAuthModal } from "../../redux/ui/uiSlice";
import Button from "../Common/Button";
import Input from "../Common/Input";

const Login = ({ goToRegister }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) return;

    const result = await dispatch(loginThunk(formData));

    if (loginThunk.fulfilled.match(result)) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(result.payload)
      );

      dispatch(closeAuthModal());

      setFormData({
        email: "",
        password: "",
      });

      setError({});
    } else {
      if (result.payload === "User not found") {
        setError({
          email: result.payload,
        });
      } else {
        setError({
          password: result.payload,
        });
      }
    }
  };

  return (
    <div className="flex-1 bg-white p-12">

      <h1 className="text-4xl font-bold text-teal-700">
        TravelEase
      </h1>

      <h2 className="text-2xl mt-6">
        Welcome Back
      </h2>

      <p className="text-gray-500 mt-2">
        Sign in to continue your journey
      </p>

      <form onSubmit={handleLogin}>

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={error.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={error.password}
        />

        <Button
          type="submit"
          className="w-full mt-6"
        >
          Sign In
        </Button>

        <div className="mt-8 flex justify-center gap-2">

          <p>
            Don't have an account?
          </p>

          <button
            type="button"
            onClick={goToRegister}
            className="text-teal-600 hover:underline"
          >
            Create Account
          </button>

        </div>

      </form>

    </div>
  );
};

export default Login;