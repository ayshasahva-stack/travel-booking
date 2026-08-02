import { useState } from "react";
import loginBanner from "../../assets/images/login-banner.jpg";
import Login from "./Login";
import Register from "./Register";
import { useSelector, useDispatch } from "react-redux";
import {
  closeAuthModal,
  setLoginMode,
  setRegisterMode,
} from "../../redux/ui/uiSlice";


function AuthModal() {


    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.ui.isLogin);

    const closeModal = () => {
  dispatch(setLoginMode());
  dispatch(closeAuthModal());
};

    return (
       <div className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center p-4">

            <div className="relative bg-white w-[95%] max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden mt-8">

                {/* close button */}

                <button
                    onClick={closeModal}
                   className="absolute top-4 right-4 text-2xl sm:text-3xl text-gray-700 hover:text-black z-20"
                >
                    ×
                </button>

                <div className="flex flex-col lg:flex-row h-full">

                    <div className="w-full lg:w-1/2 overflow-y-auto">
                        {isLogin ? (
                           <Login
  goToRegister={() => dispatch(setRegisterMode())}
/> 
                        ) : (
                            <Register
  goToLogin={() => dispatch(setLoginMode())}
/>
                        )}
                    </div>
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <img
                            src={loginBanner}
                            alt="Travel"
                            className="w-full h-full object-cover" />

                        {/* for overlay */}
                        <div className="absolute inset-0 bg-teal-900/50"></div>
                        <div className="absolute bottom-12 left-12 right-12 text-white">
                            <p className="text-2xl font-bold mb-2">"The world is a book, and those who do not travel read only one page."</p>
                            <p className="text-teal-200 text-sm">— Saint Augustine</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AuthModal