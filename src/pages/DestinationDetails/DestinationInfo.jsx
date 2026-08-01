import React from 'react'
import DestinationGallery from '../../components/DestDetails/DestinationGallery'
import DestinationHighlights from '../../components/DestDetails/DestinationHighlights';
import DestinationMeta from '../../components/DestDetails/DestinationMeta';
import DestinationItinerary from '../../components/DestDetails/DestinationItinerary';
import BookingCard from '../../components/DestDetails/BookingCard';

const DestinationInfo = ({ destination }) => {
    return (
        <section className="bg-stone-50 min-h-screen dark:bg-stone-950">
            <DestinationGallery destination={destination} />

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 lg:gap-10 py-10 lg:py-12">
                <div className="lg:col-span-2">
                    <DestinationMeta destination={destination} />
                   <section className="mt-10 lg:mt-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-white mb-6">
                            About this trip
                        </h2>

                       <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-10 text-stone-600 dark:text-stone-400">
                            {destination.description}
                        </p>
                    </section>
                    <DestinationHighlights destination={destination} />
                    <DestinationItinerary destination={destination} />
                </div>

                <BookingCard destination={destination} />
            </div>
        </section>
    );
};

export default DestinationInfo;