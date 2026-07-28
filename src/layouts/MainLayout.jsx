import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthModal from '../components/Auth/AuthModal'
import { useSelector } from 'react-redux'

const MainLayout = () => {
const showModal = useSelector((state) => state.ui.showAuthModal);


  return (
    <div>
      <Navbar
        
      />

      {showModal && (
        <AuthModal
         
        />
      )}

      <Outlet />

      <h2>Footer</h2>

    </div>
  )
}

export default MainLayout
