import React, { useState } from 'react'

const Register = ({ setIsLogin }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }
  const handleRegister = (e) => {
    e.preventDefault()

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
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      newErrors.email = "Email already registered";
      setErrors(newErrors);
      return;
    }

    users.push(formData);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registered Successfully");

    setFormData({
      username: "",
      email: "",
      password: "",
    });

    setErrors({});

    setIsLogin(true);

  }


return (
  <div className="flex-1 bg-white p-12">
    <h1 className='text-teal-700 font-bold text-4xl'>TravelEase</h1>
    <h2 className='text-2xl mt-4 '>Create Your Account</h2>
    <p className='mt-2 text-gray-600 text-m'>Start exploring the world today</p>

    <div className='flex flex-col justify-center my-6'>

      <form onSubmit={handleRegister}>

        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder='Enter your name'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-2" />

        {errors.username && (<p className='text-red-700 text-sm mt-1'>{errors.username}</p>)}

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder='you@example.com'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-2" />
        {errors.email && (<p className='text-red-700 text-sm mt-1'>{errors.email}</p>)}

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-4" />
        {errors.password && (<p className='text-red-700 text-sm mt-1'>{errors.password}</p>)}


        <button className=" w-full bg-teal-600 text-white py-3 mt-2 rounded-xl hover:bg-teal-800 transition duration-300"> Create Account →</button>
        <div className='flex flex-row mt-2 justify-center'>
          <p >Already have an account?</p>
          <button type='button'
            className='text-teal-600 hover:underline'
            onClick={() => setIsLogin(true)}
          >Log in</button>

        </div>
      </form>

    </div>


  </div >
)
}


export default Register
