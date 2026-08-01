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
    <div className="flex flex-wrap gap-3">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
            category === item
              ? "bg-yellow-400 text-black"
              : "border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:border-yellow-400 hover:text-yellow-500"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default DestFilter;