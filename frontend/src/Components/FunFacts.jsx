import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FunFacts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: 'icofont-users-alt-5', end: 3600, label: 'Active Users' },
    { icon: 'icofont-book-alt', end: 320, label: 'Awareness Articles' },
    { icon: 'icofont-chat', end: 8421, label: 'Chatbot Replies' },
    { icon: 'icofont-heart-beat', end: 560, label: 'Health Records Tracked' },
  ];

  return (
    <div id="fun-facts" className="fun-facts section overlay" ref={ref}>
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="single-fun">
                <i className={`icofont ${stat.icon}`}></i>
                <div className="content">
                  <h3>
                    {inView && (
                      <CountUp start={0} end={stat.end} duration={2} separator="," />
                    )}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
