import React from 'react'
import DestinationGallery from '../../components/DestDetails/DestinationGallery'
import DestinationHighlights from '../../components/DestDetails/DestinationHighlights';
import DestinationMeta from '../../components/DestDetails/DestinationMeta';
import DestinationItinerary from '../../components/DestDetails/DestinationItinerary';
import BookingCard from '../../components/DestDetails/BookingCard';

const DestinationInfo = ({ destination }) => {
    return (
        <section className="bg-stone-50 min-h-screen">
            <DestinationGallery destination={destination} />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 py-12">
                <div className="lg:col-span-2">
                    <DestinationMeta destination={destination} />
                    <section className="mt-12">
                        <h2 className="text-4xl font-bold text-stone-900 mb-6">
                            About this trip
                        </h2>

                        <p className="text-xl leading-10 text-stone-600">
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