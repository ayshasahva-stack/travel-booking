import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal, openLogin, openRegister, setLoginMode } from "../../redux/ui/uiSlice";

import Login from "./Login";
import Register from "./Register";
import loginBanner from "../../assets/images/login-banner.jpg";

function AuthModal() {
  const dispatch = useDispatch();

  const { mode } = useSelector((state) => state.ui);

  const closeModal = () => {
    dispatch(closeAuthModal());
    dispatch(setLoginMode()); // Next time always start with Login
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-stone-900 w-[92%] max-w-4xl h-[78vh] rounded-3xl shadow-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black z-20"
        >
          ×
        </button>

        <div className="flex flex-col lg:flex-row h-full">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 overflow-y-auto">

            {mode === "login" ? (
              <Login
                goToRegister={() => dispatch(openRegister())}
              />
            ) : (
              <Register
                goToLogin={() => dispatch(openLogin())}
              />
            )}

          </div>

          {/* Right Side */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img
              src={loginBanner}
              alt="Travel"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-teal-900/50"></div>

          <div className="absolute bottom-8 left-8 right-8 text-white">
             <p className="text-xl font-bold leading-relaxed mb-2">
                "The world is a book, and those who do not travel read only one page."
              </p>

              <p className="text-teal-200 text-sm">
                — Saint Augustine
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthModal;