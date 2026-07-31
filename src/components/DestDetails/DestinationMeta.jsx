const DestinationMeta = ({ destination }) => {
  return (
    <section className="space-y-6">
      {/* Heading */}
     <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
        Trip Overview
      </h2>

      {/* Rating & Duration */}
      <div className="flex flex-wrap gap-4">
        {/* Duration */}
       <div className="flex items-center gap-3 bg-white px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-sm">
       <span className="text-xl sm:text-2xl flex-shrink-0">🗓</span>
          <div>
           <h3 className="font-semibold text-base sm:text-lg">
              {destination.duration}
            </h3>

            <p className="text-gray-500 text-sm">
              Trip Duration
            </p>
          </div>
        </div>
      </div>

      {/* Trip Types */}
      <div>
       <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-4">
          Trip Type
        </h3>

        <div className="flex flex-wrap gap-3">
          {destination.type.map((item) => (
            <span
              key={item}
             className="bg-teal-100 text-teal-700 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-teal-700 hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationMeta;