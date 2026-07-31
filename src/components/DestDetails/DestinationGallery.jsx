import { useState } from "react";
import { Link } from "react-router-dom";

const DestinationGallery = ({ destination }) => {
  const [selectedImage, setSelectedImage] = useState(
    destination.gallery[0]);

  return (
    <>
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">

        <img
          src={selectedImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <Link
          to="/destinations"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition"
        >
          ← Back
        </Link>
        <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 text-white">

          <p className="text-base sm:text-lg">
            {destination.country}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            {destination.name}
          </h1>
        </div>

      </div>
      <div className="max-w-7xl mx-auto flex gap-4 mt-6 px-4 sm:px-6 overflow-x-auto pb-2">

        {destination.gallery.map((image, index) => (

          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            onClick={() => setSelectedImage(image)}
            className={`w-24 h-20 sm:w-28 sm:h-22 lg:w-32 lg:h-24 object-cover rounded-xl cursor-pointer transition-all duration-300 flex-shrink-0 ${selectedImage === image
                ? "ring-4 ring-teal-600"
                : "hover:scale-105"
              }`}
          />

        ))}

      </div>
    </>
  );
};

export default DestinationGallery;