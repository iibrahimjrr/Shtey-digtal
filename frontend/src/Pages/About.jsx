import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'



const About = () => {

    useEffect(() => {

      const link = document.createElement("link");
      link.href = "/css/about.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.href = "/css/bootstrap.min.css";
        link2.rel = "stylesheet";
        document.head.appendChild(link2);
    
        const script = document.createElement("script");
        script.src ="/js/chatbot.js";
        script.async = true;
        document.body.appendChild(script);


        const script2 = document.createElement("script");
        script2.src = "/js/about.js";
        script2.async = true;
        document.body.appendChild(script2);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
            document.body.removeChild(script2);
            document.body.removeChild(script);
        };
      }, []);

  return (
    <div>
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default About;
