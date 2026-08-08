const Loading = () => {
  return (
    <section className="flex items-center justify-center py-20 sm:py-24 md:py-32 px-4">
      <div className="text-center">

       
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto border-4 border-stone-200 border-t-teal-700 rounded-full animate-spin"></div>

        <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-stone-900">
          Loading...
        </h2>

        
        <p className="mt-3 text-stone-600 text-base sm:text-lg">
          Please wait while we prepare your travel experience.
        </p>

      </div>
    </section>
  );
};

export default Loading;