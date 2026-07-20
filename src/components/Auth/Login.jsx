import React, { useState } from 'react'

const Login = ({ setIsLogin }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState({})

  const handleLogin = (e) => {

    e.preventDefault()

    const newErrors = {}

    if (email.trim() === "") {
      newErrors.email = "Email is required"

    }
    if (password.trim() === "") {
      newErrors.password = 'password is required'
    }

    setError(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }
    console.log('login success');


    console.log(email);
    console.log(password);


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
          <label className="block text-gray-700 font-medium mb-4">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600" />

          {error.email && (<p className='text-red-700 text-sm mt-1'>{error.email}</p>)}

        </div>

        {/* password */}

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-4">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 " />

          {error.password && (<p className='text-red-700 text-sm mt-1'>Password is required</p>)}
        </div>


        {/* <p>Email: {email}</p>
      <p>Password: {password}</p> */}


        <button
          type='submit'
          className=" w-full bg-teal-600 text-white py-3 mt-8 rounded-xl hover:bg-teal-800 transition duration-300">
          Sign In →
        </button>

        <div className="mt-8 flex justify-center items-center gap-2">

          <p className="text-gray-600">
            Don't have an account?
          </p>

          <button
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
