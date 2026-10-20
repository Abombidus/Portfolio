import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Abombidus
      </a>

      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/Mario.Abo.2025" className="facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/abombidus" className="instagram">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/abombidus" className="twitter">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;2025 Abombidus Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
