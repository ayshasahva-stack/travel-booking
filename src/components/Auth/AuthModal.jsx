import loginBanner from "../../assets/images/login-banner.jpg";


function AuthModal({ setShowModal }) {

    const closeModal=()=>{
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
                    <div className="flex-1 bg-white p-12">
                        <h1 className="text-4xl font-bold text-teal-700">TravelEase</h1>

                        <h2 className="text-2xl font-bold mt-4">Welcome Back</h2>
                        <p className="text-gray-500 mt-2 text-m">
                            Sign in to continue your journey
                        </p>

                        {/* email */}

                        <div className="mt-6">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600" />

                        </div>

                        {/* password */}

                        <div className="mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none  focus:border-teal-600 " />

                        </div>
                        <button className=" w-full bg-teal-600 text-white py-3 mt-6 rounded-xl hover:bg-teal-800 transition duration-300">
                            Sign In →
                        </button>

                        <div className="mt-4 flex justify-center items-center gap-2">

                            <p className="text-gray-600">
                                Don't have an account?
                            </p>

                            <button className="text-teal-600  hover:underline mt-1">
                                Create Account
                            </button>

                        </div>

                    </div>

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