import React from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import FunFacts from '../Components/FunFacts';
import Clients from '../Components/Clients';
import Footer from '../Components/Footer';
import Features from '../Components/Features';
import WhyChoose from '../Components/WhyChoose';
import CallAction from '../Components/CallAction';
import Ai from '../Components/AI';

import { useEffect } from 'react';
const Home = () => {

  useEffect(() => {

    const link = document.createElement("link");
    link.href = "css/bootstrap.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src ="/js/chatbot.js";
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    
    };
  }, []);


  return (
    <div>
      <Header />
      <main>
        <Slider />
        <Features />
        <FunFacts />
        <WhyChoose />
        <Ai />
        <CallAction />
        <Clients />
      </main>
        <Footer />
    </div>
  )
}

export default Home;
