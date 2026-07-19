import loginBanner from "../../assets/images/login-banner.jpg";


function AuthModal() {
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center">

            <div className="bg-white w-[900px] h-[550px] rounded-3xl shadow-2xl overflow-hidden">

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

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AuthModal