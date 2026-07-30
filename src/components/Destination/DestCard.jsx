import { useNavigate } from "react-router-dom";

const DestCard = ({ destination }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/destinations/${destination.id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-72 object-cover"
        />

        {/* Tag */}
        <span className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          {destination.tag}
        </span>

        {/* Duration */}
        <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
          {destination.duration}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-3xl font-bold">
              {destination.name}
            </h2>

            <p className="text-gray-500 mt-1">
              📍 {destination.country}
            </p>

          </div>

          <div className="text-right">

            <h3 className="text-3xl font-bold text-teal-600">
              ${destination.price}
            </h3>

            <p className="text-sm text-gray-500">
              per person
            </p>

          </div>

        </div>

        {/* Categories */}

        <div className="flex gap-2 mt-5">

          <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
            {destination.category}
          </span>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center mt-6">

          <button className="text-amber-400 font-semibold hover:underline">
            View Details →
          </button>

          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            ⭐ {destination.rating}
          </div>

        </div>

      </div>

    </div>
  );
};

export default DestCard;