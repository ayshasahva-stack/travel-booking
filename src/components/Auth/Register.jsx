import React, { useState } from 'react'
import { registerThunk } from '../../redux/auth/authThunk'
import { useDispatch } from 'react-redux'
import Button from '../Common/Button'
import Input from "../Common/Input";

const Register = ({ goToLogin }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }
 const handleRegister = async (e) => {
  e.preventDefault();
    e.stopPropagation();
   console.log("FORM SUBMITTED");
  console.log("Register submitted");

    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = "Username is Required"
    } else if (formData.username.length < 3) {
      newErrors.username = "please enter your full name"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = 'password is required'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long.";

    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return;
    }

   const result = await dispatch(registerThunk(formData));

console.log("Thunk result:", result);

if (registerThunk.fulfilled.match(result)) {
  console.log("SUCCESS");

  setFormData({
    username: "",
    email: "",
    password: "",
  });

  setErrors({});

  console.log("Before goToLogin");

setTimeout(() => {
  console.log("Calling goToLogin");
  goToLogin();
}, 5000);
} else {
  console.log("REJECTED", result);

  setErrors({
    email: result.payload,
  });
}



  }


  return (
    <div className="flex-1 bg-white p-12">
      <h1 className='text-teal-700 font-bold text-4xl'>TravelEase</h1>
      <h2 className='text-2xl mt-2 '>Create Your Account</h2>
      <p className='mt-2 text-gray-600 text-m'>Start exploring the world today</p>

      <div className='flex flex-col justify-center mt-2'>

        <form onSubmit={handleRegister}>

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
            placeholder="you@example.com"
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
            className="w-full mt-2"
          >
            Create Account →
          </Button>          <div className='flex flex-row mt-2 justify-center'>
            <p >Already have an account?</p>
            <button type='button'
              className='text-teal-600 hover:underline'
               onClick={goToLogin}
            >Log in</button>

          </div>
        </form>

      </div>


    </div >
  )
}


export default Register
