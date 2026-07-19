


function AuthModal() {
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center">

            <div className="bg-white w-[900px] h-[500px] rounded-3xl shadow-2xl overflow-hidden">

                <div className="flex h-full ">
                    <div className="flex-1 bg-white p-12">
                        <h1 className="text-4xl font-bold text-teal-700">travelEase</h1>

                        <h2 className="text-2xl font-bold mt-6">Welcome Back</h2>
                        <p className="text-gray-500 mt-2 text-m">
                            Sign in to continue your journey
                        </p>

                        {/* email */}

                        <div className="mt-6">
                            <label className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input 
                            type="email"
                            placeholder="Enter your email"
                              className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none " />

                        </div>

                    </div>

                    <div className="flex-1 bg-green-200">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AuthModal