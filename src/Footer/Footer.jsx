import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Lets build the future</p>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>My Slef</h4>
            <ul> 
              <li><a href="#">about me</a></li>
              <li><a href="#">My interests</a></li>
              <li><a href="#">Profiles</a></li>
              <li><a href="#">My certifications</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My performances</h4>
            <ul>
              <li><a href="#">LeetCode</a></li>
              <li><a href="#">HackerRank</a></li>
              <li><a href="#">others</a></li>
              {/* <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Home</a></li>
              {/* <li><a href="#"></a></li> */}
              <li><a href="#">About me</a></li>
              <li><a href="#">Ntng</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow me</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
              <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#"><i className="fab fa-linkedin-in fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
