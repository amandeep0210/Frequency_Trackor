import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Hey I am Amandeep, a passionate about technologies and its potential to solve complex
            problems.I am enthusiastic towards creating complex website using Html, Css, Js and React Js.
            
          </p>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul className="footer-list">
            <li><a href="https://www.linkedin.com/in/amandeep0210/">Linkedin</a></li>
            <li><a href="https://leetcode.com/amandeep0210/">Leetcode</a></li>
            <li><a href="https://auth.geeksforgeeks.org/user/amandeep0210/practice">GFG</a></li>
            <li><a href="https://www.codechef.com/users/amandeep0210">Codechef</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li><i className="fa fa-phone"></i> 7009868583</li>
            <li><i className="fa fa-envelope"></i> amandeepnirania@gmail.com</li>
            <li><i className="fa fa-map-marker"></i> Phagwara, Punjab</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
