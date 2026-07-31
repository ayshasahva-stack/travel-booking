import { FiSearch } from "react-icons/fi";

const DestSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="my-10 px-4">
      <div className="relative max-w-4xl mx-auto">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 pl-12 pr-4 rounded-2xl border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-800"
        />
      </div>
    </div>
  );
};

export default DestSearch;