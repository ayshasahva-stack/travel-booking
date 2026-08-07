const DestSort = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="
        px-4 py-2 rounded-xl
        border border-stone-300 dark:border-stone-700
        bg-white dark:bg-stone-900
        text-stone-700 dark:text-stone-200
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-teal-400
        transition-colors duration-300
      "
    >
      <option value="">Sort By</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>

    </select>
  );
};

export default DestSort;