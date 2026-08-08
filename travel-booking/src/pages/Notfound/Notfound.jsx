import { Link } from "react-router-dom";
import { FaHome, FaCompass } from "react-icons/fa";

const Notfound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-teal-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">

       
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-teal-700">
          404
        </h1>

       
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
          Oops! Page Not Found
        </h2>

        
        <p className="mt-6 text-base sm:text-lg text-stone-600 leading-8">
          The page you're looking for doesn't exist or may have been
          moved. Let's get you back on track and continue your journey.
        </p>

       
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center justify-center gap-2 border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaCompass />
            Explore Destinations
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Notfound;