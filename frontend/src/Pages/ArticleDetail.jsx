import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import ArticleDetails from '../Components/ArticleDetails'
import Footer from '../Components/Footer'


const ArticleDetail = () => {

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "/css/ArticleDetails.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.href = "/css/bootstrap.min.css";
        link2.rel = "stylesheet";
        document.head.appendChild(link2);

        const script = document.createElement("script");
        script.src = "/js/chatbot.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
            document.body.removeChild(script);
        };

    }, []);


  return (
    <div>
        <Header />
        <main>
        <ArticleDetails />
        </main>
        <Footer />

    </div>
  )
}

export default ArticleDetail;
