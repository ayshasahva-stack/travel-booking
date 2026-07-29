const DestSearch = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="my-10 mx-50">
            <input
                type="text"
                
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 py-3 rounded-2xl border border-stone-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-stone-800"

            />
        </div>
    );
};

export default DestSearch;