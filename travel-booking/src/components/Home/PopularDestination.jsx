import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Common/Loading";

const PopularDestinations = () => {
  const navigate = useNavigate();

  const { destinations, loading, error } = useSelector(
    (state) => state.destination
  );

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
            Explore Popular Destinations
          </h2>

          <p className="text-gray-500 dark:text-stone-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the world's most beautiful places with exclusive travel
            packages.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {destinations.slice(0, 4).map((destination, index) => (
            <div
              key={destination.id}
              onClick={() => navigate(`/destinations/${destination.id}`)}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative h-[380px] sm:h-[430px] lg:h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-in-out"
              />

             
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
                <span className="bg-yellow-400 text-black font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                  {destination.tag}
                </span>
              </div>

             
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm text-gray-300">
                  📍 {destination.city}, {destination.country}
                </p>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                  {destination.name}
                </h3>

                <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm">
                  {destination.duration}
                </p>

                <div className="flex justify-between items-center mt-4 sm:mt-6">
                  <div>
                    <p className="text-yellow-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                      From ${destination.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;