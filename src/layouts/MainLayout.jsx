import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthModal from '../components/Auth/AuthModal'

const MainLayout = () => {

  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))


  return (
    <div>
      <Navbar
        setShowModal={setShowModal}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {showModal && (
        <AuthModal
          setShowModal={setShowModal}
          setCurrentUser={setCurrentUser}
        />
      )}

      <Outlet />

      <h2>Footer</h2>

    </div>
  )
}

export default MainLayout
