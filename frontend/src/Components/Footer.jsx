import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        {/* قسم المعلومات العامة */}
        <div className="egator">
          <h2>Sehty</h2>
          <p>
            We provide e-health care to help sick people with temporary consultations from home, 
            facilitating access to healthcare for those in rural or remote areas.
          </p>
        </div>

        {/* قسم الروابط */}
        <div className="links">
          <h2>PermaLinks</h2>
          <ul className="ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/awareness">Awareness</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* قسم الخصوصية */}
        <div className="primacy">
                <h2>Privacy</h2>
                <p>Privacy Policy</p>
                <p>Terms and conditions</p>
                <p>Refund Policy</p>
            </div>

        {/* قسم التواصل */}
        <div className="contact">
          <h2>Contact Us</h2>
          <p>Email: support@sehty.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <p className="footer-title">Made by Our Team</p>
    </div>
  );
};

export default Footer;
