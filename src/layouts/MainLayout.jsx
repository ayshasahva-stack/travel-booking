import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>

        <Outlet/>

        <h2>Footer</h2>
      
    </div>
  )
}

export default MainLayout
