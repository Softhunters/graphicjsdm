import React from 'react';
import './Footer.css';  
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        {/* Top Shape */}
        <div className="footer-top-shape" style={{ backgroundImage: 'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/jiji-bg.png")' }}></div>

        {/* Footer Widgets */}
        <div className="footer-widgets-container">
          {/* About Us Widget */}
          <div className="footer-widget">
            <div className="about-logo">
              <Link to="/">
                <img src="/img/logo.png" alt="Logo" height="50px" width="100px" />
              </Link>
            </div>
            <p className="about-text">
              Beyond esports tournaments, include a broader calendar of gaming events, conferences, and conventions.
            </p>
            <h3>Follow <span className="text-theme">With Us:</span></h3>
            <div className="social-links">
            
              <Link to="https://www.facebook.com" className="facebook"><RiFacebookFill /></Link>
              <Link to="https://www.twitter.com" className="twitter"><IoLogoTwitter /></Link>
              <Link to="https://www.instagram.com" className="instagram"><GrInstagram /></Link>
              <Link to="https://www.linkedin.com" className="linkedin"><FaLinkedinIn /></Link>
              <Link to="https://play.google.com/store/apps?hl=en&gl=US" className="google-play"><FaGooglePlay /></Link>
            </div>
          </div>

          {/* Useful Links Widget */}
          <div className="footer-widget">
            <h3>Useful Links </h3>
            <ul>
              <li><Link to="/">Gaming</Link></li>
              <li><Link to="/">Latest News</Link></li>
              <li><Link to="/">Our GALLERY</Link></li>
              <li><Link to="/">Tournaments</Link></li>
              <li><Link to="/">All Players</Link></li>
              <li><Link to="/">About Me</Link></li>
            </ul>
          </div>

          {/* Supports Widget */}
          <div className="footer-widget">
            <h3>Supports</h3>
            <ul>
              <li><Link to="/">Help & Support</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Our Blog</Link></li>
              <li><Link to="/">Bame My Account</Link></li>
              <li><Link to="/">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter Widget */}
          <div className="footer-widget">
            <h3>Newsletter</h3>
            <p className='about-text'>Subscribe to our newsletter to get our latest update & news consenter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit"><RiSendPlaneFill size={25} /></button>
            </form>
            <div className="app-links mt-3">
              <Link to="https://play.google.com/store/apps?hl=en&gl=US">
                <img src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/footer-playstore-btn.png" alt="Play Store" />
              </Link>
              <Link to="https://www.apple.com/app-store/">
                <img src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/footer-apple-btn.png" alt="App Store" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-wrap">
          <p className="copyright-text">
            <i className="fal fa-copyright"></i> Copyright 2024 <Link to="/">Rtlabs.</Link> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
