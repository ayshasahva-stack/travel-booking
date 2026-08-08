import { FaMapMarkedAlt } from "react-icons/fa";

const EmptyState = () => {
  return (
   <section className="flex items-center justify-center py-16 sm:py-20 md:py-28 px-4 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-lg text-center">

      
        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
          <FaMapMarkedAlt className="text-4xl sm:text-5xl text-teal-700" />
        </div>

        
        <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 dark:text-white transition-colors duration-300">
          No Destinations Found
        </h2>

        
        <p className="mt-4 text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-7 transition-colors duration-300">
          We couldn't find any destinations matching your search or
          selected filters. Try changing your search or browse all
          available destinations.
        </p>

      </div>
    </section>
  );
};

export default EmptyState;