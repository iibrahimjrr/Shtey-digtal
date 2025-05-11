import React from 'react';
import { NavLink } from 'react-router-dom';

const Ai = () => {
  return (
    <section className="ai-section mb-5">
      <div className="container">
        <div className="ai-title">
          <h3>Ai in HealthCare</h3>
          <p>
            <span>Routine</span> administrative tasks can be a significant burden in the healthcare field.
            AI enhances operational efficiency by automating certain processes, allowing for a greater focus
            on awareness and delivering health information more quickly and accurately..
          </p>
          <NavLink to="/NotFound" className="aiMORE">Show More</NavLink>
        </div>

        <div className="sec-img">
          <img src="img/Ai section.webp" loading='lazy' alt="Using Ai From Health" />
        </div>
      </div>
    </section>
  );
}

export default Ai;
