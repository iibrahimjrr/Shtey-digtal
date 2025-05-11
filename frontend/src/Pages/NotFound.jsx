import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // ✅ استدعاء NavLink

const NotFound = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "/css/NotFound.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className='not-found'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="icon-container"
      >
        <AlertTriangle className="error-icon" strokeWidth={1.5} />
      </motion.div>

      <motion.h1 
        className="not-found-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.h2 
        className="not-found-subtitle"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p 
        className="not-found-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink to="/Home" className="not-found-link">
          Go Back Home
        </NavLink>
      </motion.div>
    </div>
  );
};

export default NotFound;
