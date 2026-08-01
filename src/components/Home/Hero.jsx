import React from 'react'
import heroImage from '../../assets/images/hero.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "../../redux/ui/uiSlice";
import Button from '../Common/Button';


const Hero = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

const { user } = useSelector((state) => state.auth);

  const handleExplore = () => {
    navigate('/destinations')
  }
  
  const handleBookNow = () => {
  if (!user) {
    dispatch(openAuthModal());
  } else {
    navigate("/booking");
  }
};



  return (
    <section className="relative h-[90vh]">
      <img
        src={heroImage}
        alt="Hero"
        className='absolute  inset-0 w-full h-full object-cover' />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Explore the World with{" "}
          <span className="text-yellow-400">Travel</span><span className="text-teal-600">Ease</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
          Discover breathtaking destinations, luxury hotels, and unforgettable
          travel experiences — all in one place.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            onClick={handleExplore}>
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
