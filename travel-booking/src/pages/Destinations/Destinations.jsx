import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import DestSearch from '../../components/Destination/DestSearch';
import DestCard from '../../components/Destination/DestCard';
import DestFilter from "../../components/Destination/DestFilter";
import { useDispatch } from "react-redux";
import { fetchDestinations } from "../../redux/destination/destinationThunk";
import DestSort from "../../components/Destination/DestSort";
import Loading from '../../components/Common/Loading';
import EmptyState from '../../components/Common/EmptyState';
import ErrorMessage from '../../components/Common/ErrorMessage';

const Destinations = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);


  const { destinations, loading, error } = useSelector(
    (state) => state.destination);

  if (loading)
    return <Loading />;
  if (error) {
    return <ErrorMessage message={error} />;

  }
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || destination.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedDestinations = [...filteredDestinations];

  if (sortBy === "low") {
    sortedDestinations.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    sortedDestinations.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    sortedDestinations.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-stone-950 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-white font-bold text-center">
          Explore Destinations
        </h1>


        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          Find your perfect destination for your next unforgettable journey.
        </p>


        <DestSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <DestFilter
            category={category}
            setCategory={setCategory}
          />

          <DestSort
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
        {sortedDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {sortedDestinations.map((destination) => (
              <DestCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}



      </div>

    </section>
  );
}

export default Destinations
