import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Topics from '../Components/Topics'
import Articles from '../Components/Articles'
import Videos from '../Components/Videos'
import Footer from '../Components/Footer'



const Awareness = () => {
    useEffect(() => {
    
      const link = document.createElement("link");
      link.href = "css/awareness.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

            const link2 = document.createElement("link");
            link2.href = "css/bootstrap.min.css";
            link2.rel = "stylesheet";
            document.head.appendChild(link2);
        
            const script = document.createElement("script");
            script.src ="/js/chatbot.js";
            script.async = true;
            document.body.appendChild(script);

        
            const script2 = document.createElement("script");
            script2.src = "js/awareness.js";
            script2.async = true;
            document.body.appendChild(script2);
    
            return () => {
                document.head.removeChild(link);
                document.head.removeChild(link2);
                document.body.removeChild(script);
                document.body.removeChild(script2);
            };
          }, []);
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Topics />
        <Articles />
        <Videos />
      </main>
      <Footer />
    </div>
  )
}

export default Awareness;
