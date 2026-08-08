import { FaExclamationTriangle } from "react-icons/fa";
import Button from "./Button";

const ErrorMessage = ({
  message = "Something went wrong. Please try again later.",
}) => {
  return (
   <section className="flex items-center justify-center py-16 sm:py-20 md:py-28 px-4 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-lg text-center">

      
        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <FaExclamationTriangle className="text-4xl sm:text-5xl text-red-600" />
        </div>

        
        <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 dark:text-white transition-colors duration-300">
          Oops! Something Went Wrong
        </h2>

       
        <p className="mt-4 text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-7 transition-colors duration-300">
          {message}
        </p>

        <Button
          onClick={() => window.location.reload()}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
        >
          Try Again
        </Button>

      </div>
    </section>
  );
};

export default ErrorMessage;