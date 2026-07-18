import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthModal from '../components/Auth/AuthModal'

const MainLayout = () => {

  const [showModal, setShowModal] = useState(false)


  return (
    <div>
      <Navbar setShowModal={setShowModal} />

      {showModal && <AuthModal />}

      <Outlet />

      <h2>Footer</h2>

    </div>
  )
}

export default MainLayout
