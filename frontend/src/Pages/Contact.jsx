import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import BreadCrumbs from '../Components/BreadCrumbs'
import StartContact from '../Components/StartContact'
import Footer from '../Components/Footer'

const Contact = () => {

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
        <BreadCrumbs />
        <StartContact />
      </main>
      <Footer />
    </div>
  )
}

export default Contact;
