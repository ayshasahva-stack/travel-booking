const DestFilter = ({ category, setCategory }) => {
  const categories = [
    "All",
    "Beach",
    "City",
    "Island",
    "Nature",
    "Luxury",
    "Mountain",
    "Coastal",
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-4 py-1.5 rounded-full transition-colors ${
            category === item
              ? "bg-yellow-400 text-black"
              : "border border-stone-200 hover:border-yellow-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default DestFilter;