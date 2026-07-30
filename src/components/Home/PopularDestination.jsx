import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PopularDestinations = () => {

    const navigate = useNavigate()

    const { destinations, loading, error } = useSelector(
        (state) => state.destination
    );

    if (loading) {
        return (
            <div className="text-center py-20 text-2xl font-semibold">
                Loading destinations...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-600 text-xl">
                {error}
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-bold text-gray-800">
                        Explore Popular Destinations
                    </h2>

                    <p className="text-gray-500 mt-4 text-lg">
                        Discover the world's most beautiful places with exclusive travel
                        packages.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {destinations.slice(0, 4).map((destination,index) => (

                        <div
                            onClick={() => navigate(`/destinations/${destination.id}`)}
                            key={destination.id}
                             data-aos="fade-up"
    data-aos-delay={index * 150}
    className="relative text-center group"
                            className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >

                            {/* Image */}
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-in-out"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                            {/* Tag */}
                            {/* Tag */}
                            <div className="absolute top-5 left-5">
                                <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full text-sm">
                                    {destination.tag}
                                </span>
                            </div>

                            {/* Favourite Icon */}
                            <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                                🤍
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                                <p className="uppercase tracking-[3px] text-sm text-gray-300">
                                    📍 {destination.city}, {destination.country}
                                </p>

                                <h3 className="text-4xl font-bold mt-2">
                                    {destination.name}
                                </h3>

                                <p className="text-gray-300 mt-3 text-sm">
                                    {destination.duration}
                                </p>

                                <div className="flex justify-between items-center mt-6">

                                    <div>
                                        <p className="text-yellow-400 text-3xl font-bold">
                                            From ${destination.price}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-400">⭐</span>
                                        <span>{destination.rating}</span>
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