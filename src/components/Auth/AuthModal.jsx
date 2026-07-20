import loginBanner from "../../assets/images/login-banner.jpg";
// import Login from "./Login";
import Register from "./Register";

function AuthModal({ setShowModal }) {

    const closeModal = () => {
        setShowModal(false)
    }


    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center">

            <div className="relative bg-white w-[900px] h-[550px] rounded-3xl shadow-2xl overflow-hidden ">

                {/* close button */}

                <button
                    onClick={closeModal}
                    className="absolute top-5 right-5 text-black-400 hover:text-gray-700 text-3xl z-20"
                >
                    ×
                </button>

                <div className="flex h-full ">

                    {/* <Login/> */}
                    <Register/>

                    <div className="flex-1 relative">
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