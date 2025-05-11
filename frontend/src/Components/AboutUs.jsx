import React from "react";
import { Heart, Shield, Clock, Bot, CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Your Health Journey Starts Here</h1>
            <p>
              Track, manage, and improve your health with our comprehensive
              digital health platform
            </p>
          </div>
        </section>

        <section className="features">
          <h2>
            Why Choose <span>Se7ty</span> ?
          </h2>
          <div className="feature-grid">
            <div className="feature-card">
              <Heart size={32} />
              <h3>Personal Health Records</h3>
              <p>Keep all your medical information in one secure place</p>
            </div>
            <div className="feature-card">
              <Shield size={32} />
              <h3>Secure & Private</h3>
              <p>Your health data is protected with enterprise-grade security</p>
            </div>
            <div className="feature-card">
              <Clock size={32} />
              <h3>24/7 Access</h3>
              <p>Access your health information anytime, anywhere</p>
            </div>
            <div className="feature-card">
              <Bot size={32} />
              <h3>Advanced Chatbot</h3>
              <p>Answer you immediately to your health questions</p>
            </div>
          </div>
        </section>

        <section className="video-section">
            <div className="section-container">
                <h2>Health Education Center</h2>
                <p className="section-description">Stay informed with our curated health education videos from trusted
                    sources</p>

                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-container">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/FC4soCjxSOQ?si=X0qvw-PV8CTRu46h"
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </div>
                        <div className="video-content">
                            <h3>COVID-19 Protection Guidelines</h3>
                            <p>Official WHO guidance on protecting yourself and others</p>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/yF7Ou43Vj6c"
                                title="Mayo Clinic Minute: Benefits of exercise" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="video-content">
                            <h3>Benefits of Exercise</h3>
                            <p>Mayo Clinic explains why regular exercise is crucial for health</p>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/zJgHbifIx-Q" title="The food we eat | NHS"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="video-content">
                            <h3>Healthy Eating Guide</h3>
                            <p>NHS guide to maintaining a balanced diet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="chatbot-section">
          <div className="section-container">
            <div className="chatbot-grid">
              <div className="chatbot-content">
                <h2>Meet Your AI Health Assistant</h2>
                <p className="section-description">
                  Get instant answers to your health questions with our
                  intelligent chatbot
                </p>
                <ul className="chatbot-features">
                  <li>
                    <CheckCircle size={20} />
                    <span>24/7 health information and guidance</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Personalized health recommendations</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Quick symptom assessment</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Medication reminders and tracking</span>
                  </li>
                </ul>
              </div>
              <div className="chatbot-image">
                <img src="img/chatbot.webp" loading="lazy" alt="AI Health Assistant" />
              </div>
            </div>
          </div>
        </section>
      </main>
    
  );
};

export default AboutUs;
