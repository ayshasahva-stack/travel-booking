import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../redux/auth/authThunk'
import { closeAuthModal } from "../../redux/ui/uiSlice";
import Button from '../Common/Button';
import Input from '../Common/Input';
const Login = ({ setIsLogin }) => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({})

  const dispatch = useDispatch()

  const { loading } = useSelector((state) => state.auth)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }


  const handleLogin = async (e) => {

    e.preventDefault()

    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"

    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = 'password is required'
    }
    setError(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    const result = await dispatch(loginThunk(formData));


    if (loginThunk.fulfilled.match(result)) {
      alert("Login Successfully")

      localStorage.setItem("currentUser", JSON.stringify(result.payload));

      setFormData({
        email: "",
        password: ""
      });
      setError({})
      dispatch(closeAuthModal());

    } else if (loginThunk.rejected.match(result)) {
      if (result.payload === "User not found") {

        setError({
          email: result.payload
        })

      }
      else if (result.payload === "Invalid password") {
        setError({
          password: result.payload
        })
      }
    }
  }


  return (

    <div className="flex-1 bg-white p-12 ">

      <h1 className="text-4xl font-bold text-teal-700">TravelEase</h1>

      <h2 className="text-2xl mt-6">Welcome Back</h2>
      <p className="text-gray-500 mt-2 text-m">
        Sign in to continue your journey
      </p>

      <form onSubmit={handleLogin}>

        {/* email */}

        <div className="mt-6">

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={error.email}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            error={error.password}
          />
        </div>



        {/* <p>Email: {email}</p>
      <p>Password: {password}</p> */}


        <Button
          type="submit"
          className="w-full bg-teal-700 text-white hover:bg-teal-600 mt-6"
        >
          Sign In
        </Button>

        <div className="mt-8 flex justify-center items-center gap-2">

          <p className="text-gray-600">
            Don't have an account?
          </p>

          <button
            type='button'
            className="text-teal-600  hover:underline "
            onClick={() => setIsLogin(false)}>
            Create Account
          </button>

        </div>
      </form>


    </div>


  )
}

export default Login
