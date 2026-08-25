const DestinationMeta = ({ destination }) => {
  return (
    <section className="space-y-6">

      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
        Trip Overview
      </h2>


      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-4 dark:text-white">
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