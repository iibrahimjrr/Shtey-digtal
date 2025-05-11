import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header';
import ChatOnline from '../Components/ChatOnline';
import Footer from '../Components/Footer';
const ChatWithDoctor = () => {


    useEffect(() => {
        const link = document.createElement("link");
        link.href = "/css/ChatOnline.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.href = "/css/bootstrap.min.css";
        link2.rel = "stylesheet";
        document.head.appendChild(link2);


        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
            
        };
    }, []);

    return (
    <div>
        <Header />
        <div style={{ height: '80px' }}></div>
    <main>
        <ChatOnline />
        </main>
        <Footer />
            </div>
    )
}

export default ChatWithDoctor;