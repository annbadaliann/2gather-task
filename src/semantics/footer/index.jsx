import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import arrow from "../../assets/images/right-arrow.png";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-content">
        <div className="left-side">
          <ul>
            <li>
              Tel:{" "}
              <a href="tel:+3740111111" target="blank">
                +3740111111
              </a>
            </li>
            <li>
              Mail:{" "}
              <a href="mailto:charity@gmail.com" target="blank">
                charity@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="middle-side">
          <div className="company">
            <p className="title">Company</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="help-support">
            <p className="title">Help and Support</p>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-side">
          <p className="title">Follow us in social</p>
          <ul className="social-media-links">
            <li>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
          <p className="title">Subscribe for new projects</p>

          <div className="subscribe">
            <label>
              <input type="text" placeholder="Your email" />
            </label>
            <img src={arrow} alt="send" />
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>Address Line, Yerevan, RA, 374154</p>
        <p>© 2019. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
