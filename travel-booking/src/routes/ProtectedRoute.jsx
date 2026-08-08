import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  if (!currentUser) {
    return <Navigate to='/' />
  }

  return <Outlet />

}

export default ProtectedRoute
