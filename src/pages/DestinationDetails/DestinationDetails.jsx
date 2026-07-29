import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDestinations } from "../../redux/destination/destinationThunk";
import Loading from "../../components/Common/Loading";
import EmptyState from "../../components/Common/EmptyState";
import ErrorMessage from "../../components/Common/ErrorMessage";
import DestinationInfo from "./DestinationInfo";

const DestinationDetails = () => {
    const { id } = useParams();
    const { destinations, loading, error } = useSelector(
  (state) => state.destination
);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDestinations());
    }, [dispatch]);

const destination = destinations.find(
  (item) => item.id == id
);

   if (loading) return <Loading />;

if (error) return <ErrorMessage message={error} />;

if (!destination) return <EmptyState />;


    return (
       <DestinationInfo destination={destination} />
    );
};

export default DestinationDetails;