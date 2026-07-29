import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthModal from '../components/Auth/AuthModal'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
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

      <Footer/>

    </div>
  )
}

export default MainLayout
