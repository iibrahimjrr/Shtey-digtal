import React from 'react';
import { Heart } from 'lucide-react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="heartbeat-container">
        <Heart className="heart-icon" size={48} />
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>
      <div className="loading-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Loader;