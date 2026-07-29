const DestinationItinerary = ({ destination }) => {
  return (
    <section className="mt-14">
      <h2 className="text-4xl font-bold text-stone-900 mb-8">
        Day-by-Day Itinerary
      </h2>

      <div className="space-y-8">
        {destination.itinerary.map((day) => (
          <div
            key={day.day}
            className="flex gap-6 border-l-4 border-teal-600 pl-6"
          >
            {/* Day Circle */}
            <div className="-ml-11 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {day.day}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-stone-900">
                {day.title}
              </h3>

              <p className="text-lg text-stone-600 mt-2 leading-8">
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