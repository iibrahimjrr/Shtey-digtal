import React from 'react';

const Features = () => {
  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You & Your Family</h2>
              <img src="img/section-img.webp" loading='lazy' alt="#" />
              <p>Sehty is a digital platform that helps you take care of your health through awareness content, a smart chatbot, and easy health tracking.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Chatbot Feature */}
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-robot-face"></i>
              </div>
              <h3>Smart Chatbot</h3>
              <p>An interactive chatbot that provides you with medical tips and instant answers to your health-related questions anytime.</p>
            </div>
          </div>

          {/* Awareness Feature */}
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-read-book-alt"></i>
              </div>
              <h3>Awareness Content</h3>
              <p>Trusted articles and videos to help you understand your health conditions and prevent diseases.</p>
            </div>
          </div>

          {/* Health Tracking Feature */}
          <div className="col-lg-4 col-12">
            <div className="single-features last">
              <div className="signle-icon">
                <i className="icofont icofont-heart-beat-alt"></i>
              </div>
              <h3>Health Tracking</h3>
              <p>Record your health data and easily track your progress to always stay updated with your condition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
