import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthModal from '../components/Auth/AuthModal'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
const MainLayout = () => {
// const showModal = useSelector((state) => state.ui.showAuthModal);

// console.log("showModal:", showModal);
// useEffect(() => {
//   console.log("MainLayout Mounted");

//   return () => {
//     console.log("MainLayout Unmounted");
//   };
// }, []);
const showModal = useSelector((state) => state.ui.showAuthModal);

useEffect(() => {
  console.log("showAuthModal:", showModal);
}, [showModal]);

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
