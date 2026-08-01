import { FaPlaneDeparture } from "react-icons/fa";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-stone-950 flex flex-col items-center justify-center transition-colors duration-300">

      {/* Logo */}
      <div className="animate-pulse">
        <FaPlaneDeparture className="text-6xl text-teal-600 mx-auto" />

        <h1 className="mt-4 text-5xl font-bold text-amber-400 dark:text-white">
          Travel<span className="text-teal-600">Ease</span>
        </h1>

        <p className="mt-3 text-stone-500 dark:text-stone-400 text-lg text-center">
          Discover Your Next Adventure
        </p>
      </div>

      {/* Loading */}
      <div className="mt-10 flex gap-2">
        <span className="w-3 h-3 bg-teal-600 rounded-full animate-bounce"></span>
        <span
          className="w-3 h-3 bg-teal-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-3 h-3 bg-teal-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

    </div>
  );
};

export default SplashScreen;