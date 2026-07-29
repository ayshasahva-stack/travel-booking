const DestSort = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-stone-200 bg-white text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"

    >
      <option value="">Sort By</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  );
};

export default DestSort;