import Hero from "../../components/Home/Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../redux/destination/destinationThunk";
import PopularDestinations from "../../components/Home/PopularDestination";
import Loading from "../../components/Common/Loading";
import JourneySteps from "../../components/Home/JourneySteps";
import StatsSection from "../../components/Home/StatsSection";
import NewsLetter from "../../components/Home/NewsLetter";



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

      <StatsSection />
      <JourneySteps/>
      <NewsLetter />


    </div>
  );
}

export default Home;