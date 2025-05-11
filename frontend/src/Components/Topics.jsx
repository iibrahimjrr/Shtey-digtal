import React from 'react'

const Topics = () => {
  return (
    <div>
      <section id="topics" className="topics">
            <h2>Main Topics</h2>
            <div className="topics-grid">
                <div className="topic-card">
                    <img  src="img/healthy.webp" loading='lazy' alt="Healthy Nutrition" />
                    <h3>Healthy Nutrition</h3>
                    <p>Tips and guidelines for maintaining a healthy diet</p>
                </div>
                <div className="topic-card">
                    <img  src="img/Exercise.webp" loading='lazy' alt="Exercise" />
                    <h3>Exercise & Physical Activity</h3>
                    <p>The importance of regular exercise and daily workouts</p>
                </div>
                <div className="topic-card">
                    <img  src="img/mental.webp" loading='lazy' alt="Mental Health" />
                    <h3>Mental Health</h3>
                    <p>Caring for mental health and emotional balance</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Topics;
