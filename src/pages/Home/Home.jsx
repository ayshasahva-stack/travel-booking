import Hero from "../../components/Home/Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../redux/destination/destinationThunk";
import PopularDestinations from "../../components/Destination/PopularDestination";
import Loading from "../../components/Common/Loading";

function Home() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div>
      <Hero />

      {loading ? (
        <Loading />
      ) : (
        <PopularDestinations />
      )}
    </div>
  );
}

export default Home;