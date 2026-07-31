const DestinationHighlights = ({ destination }) => {
  return (
   <section className="mt-10 lg:mt-14">
     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 lg:mb-8">
        Trip Highlights
      </h2>

      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {destination.highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-5">
           <span className="text-teal-600 text-xl sm:text-2xl flex-shrink-0">
  ✓
</span>

          <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationHighlights;