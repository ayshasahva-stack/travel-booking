import React, { useState } from 'react'

const Register = ({setIsLogin}) => {

  // const[name,,setName]=useState


  return (
    <div className="flex-1 bg-white p-12">
      <h1 className='text-teal-700 font-bold text-4xl'>TravelEase</h1>
      <h2 className='text-2xl mt-4 '>Create Your Account</h2>
      <p className='mt-2 text-gray-600 text-m'>Start exploring the world today</p>

      <div className='flex flex-col justify-center my-6'>

        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder='Enter your full name'
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-2" />

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder='you@example.com'
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-2" />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder='At least 8 characters'
          className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 mt-2 mb-4" />
          

        <button className=" w-full bg-teal-600 text-white py-3 mt-2 rounded-xl hover:bg-teal-800 transition duration-300"> Create Account →</button>
        <div className='flex flex-row mt-2 justify-center'>
          <p >Already have an account?</p>
          <button 
          className='text-teal-600 hover:underline'
          onClick={()=>setIsLogin(true)}
          >Log in</button>


        </div>

      </div>


    </div>
  )
}

export default Register
