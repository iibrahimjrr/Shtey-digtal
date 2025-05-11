import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <NavLink to="/Home" className="logo-link">
              <img
                src="/img/Se7ty-removebg-preview.webp"
                alt="Se7ty Logo"
                className="logo-image"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {[
              ['Home', '/Home'],
              ['About Us', '/About'],
              ['Awareness', '/Awareness'],
              ['Contact Us', '/Contact']
            ].map(([title, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {title}
              </NavLink>
            ))}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `profile-link ${isActive ? 'active' : ''}`
              }
            >
              <User size={18} />
              <span>Profile</span>
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-button"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {[
              ['Home', '/Home'],
              ['About Us', '/About'],
              ['Awareness', '/Awareness'],
              ['Contact Us', '/Contact']
            ].map(([title, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={toggleMenu}
              >
                {title}
              </NavLink>
            ))}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={toggleMenu}
            >
              <User size={18} />
              <span>Profile</span>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;