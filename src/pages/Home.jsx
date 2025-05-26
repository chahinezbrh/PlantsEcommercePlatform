import React from 'react';
import HeroSection from '../components/Herosection';
import Fastdelivery from '../assets/Fastdelivery.svg';
import Support from '../assets/Support.svg';
import Highquality from '../assets/Highquality.svg';
import  '../App.css';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Products from '../components/Products';
import Events from '../components/Events';
import Footer from '../components/Footer';
import {useNavigate} from 'react-router-dom'




const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="  m-0 w-full p-0 ">
     
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Products/>
      <Events/>
      <Footer/>
      
    </div>
    
  );
};

export default Home;