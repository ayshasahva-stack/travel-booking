const DestinationItinerary = ({ destination }) => {
  return (
    <section className="mt-10 lg:mt-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 lg:mb-8 dark:text-white">
        Day-by-Day Itinerary
      </h2>

      <div className="space-y-6 lg:space-y-8">
        {destination.itinerary.map((day) => (
          <div
            key={day.day}
            className="flex gap-4 sm:gap-6 border-l-4 border-teal-600 pl-5 sm:pl-6 "
          >
         
            <div className="-ml-9 sm:-ml-11 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center text-white  font-bold text-sm sm:text-base flex-shrink-0">
              {day.day}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 dark:text-white">
                {day.title}
              </h3>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 mt-2 leading-7 sm:leading-8">
                {day.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationItinerary;