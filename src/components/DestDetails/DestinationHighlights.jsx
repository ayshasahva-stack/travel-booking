const DestinationHighlights = ({ destination }) => {
  return (
    <section className="mt-14">
      <h2 className="text-4xl font-bold text-stone-900 mb-8">
        Trip Highlights
      </h2>

      <div className="space-y-6">
        {destination.highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-5">
            <span className="text-teal-600 text-2xl">✓</span>

            <p className="text-xl text-stone-700">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationHighlights;