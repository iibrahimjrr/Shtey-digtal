import React from "react";

const Videos = () => {
  return (
    <div>
      <section id="videos" className="videos">
        <h2>Health Videos</h2>
        <div className="videos-grid">
          <div className="video-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fLLScgWQcHc?si=YMk-y17FdvvOYOKF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <h3>Simple Home Exercises</h3>
            <p>15 minutes of easy exercises you can do at home</p>
          </div>
          <div className="video-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AYXfaVD5o40?si=D3AjPGcU9GCtLQjk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3>Preparing Healthy Meals</h3>
            <p>Learn how to prepare healthy and nutritious meals at home</p>
          </div>
        </div>
        
        

        
      </section>
    </div>
  );
};

export default Videos;
