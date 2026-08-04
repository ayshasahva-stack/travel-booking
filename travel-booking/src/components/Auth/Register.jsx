import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/authThunk";

import Button from "../Common/Button";
import Input from "../Common/Input";

const Register = ({ goToLogin }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("preventDefault called");

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const result = await dispatch(registerThunk(formData));

    if (registerThunk.fulfilled.match(result)) {
      setFormData({
        username: "",
        email: "",
        password: "",
      });

      setErrors({});

      // Switch to Login without closing modal
      goToLogin();
    } else {
      setErrors({
        email: result.payload,
      });
    }
  };

  return (
    <div className="flex-1 bg-white p-12">
      <h1 className="text-4xl font-bold text-teal-700">TravelEase</h1>

      <h2 className="text-2xl mt-2">Create Your Account</h2>

      <p className="mt-2 text-gray-600">
        Start exploring the world today
      </p>

      <form onSubmit={handleRegister} className="mt-6">

        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.username}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <Button
          type="submit"
          className="w-full mt-6"
        >
          Create Account
        </Button>

        <div className="flex justify-center gap-2 mt-6">
          <p>Already have an account?</p>

          <button
            type="button"
            onClick={goToLogin}
            className="text-teal-600 hover:underline"
          >
            Log in
          </button>
        </div>

      </form>
    </div>
  );
};

export default Register;