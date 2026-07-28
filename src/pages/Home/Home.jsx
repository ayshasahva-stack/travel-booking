import Hero from "../../components/Home/Hero";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDestinations } from "../../redux/destination/destinationThunk";
import PopularDestinations from "../../components/Destination/PopularDestination";

function Home() {

  const dispatch = useDispatch();


  useEffect(() => {
  dispatch(fetchDestinations());
}, [dispatch]);

  return (
    <div >

      <Hero/>
      <PopularDestinations/>
    </div>
  );
}

export default Home;