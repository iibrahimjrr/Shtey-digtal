import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Welcome = () => {
    const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    const link = document.createElement("link");
                link.href = "css/registration.css"; 
                link.rel = "stylesheet";
                document.head.appendChild(link);

                return () => {
                  document.head.removeChild(link);
                }
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heart-icon"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <h1 className="title">Welcome to Sehty</h1>
        <p className="subtitle">
          Your journey to better health starts here. Join our community of health-conscious
          individuals and get access to personalized healthcare solutions.
        </p>
        <button className="register-btn" onClick={handleRegisterClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="user-plus-icon"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="16" y1="11" x2="22" y2="11" />
          </svg>
          Register Now
        </button>
      </div>
    </div>
    )
}

export default Welcome;