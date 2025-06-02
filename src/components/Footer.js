import React from "react";
import "./Footer.css";
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToTestimonials = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>Home</h4>
          <ul>
            <li><Link smooth to="/#carousel">Sukam Clinic</Link></li>
            <li><Link smooth to="/#exceptional-care">Care with Devotion</Link></li>
            <li><Link to="/services">Sukam Services</Link></li>
            <li><Link smooth to="/#fertility-experts">Sukam Experts</Link></li>
            <li><Link smooth to="/#testimonials">Sukam Voices</Link></li>
            <li><Link to="/blogs">Sukam Blogs</Link></li>
            <li><Link to="/gallery">Sukam Gallery</Link></li>
            <li><Link smooth to="/#reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="/doctor-profile/dr-manoj-karthik">Dr. Manoj Karthik S</Link></li>
            <li><Link to="/doctor-profile/dr-anitha-a-manoj">Dr. Anitha A Manoj</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Specialities</h4>
          <ul>
            <li><Link to="/services/surgery">General Surgery</Link></li>
            <li><Link to="/services/pregnancy">Obstetrics & Gynaecology</Link></li>
            <li><Link to="/services/gynecology">Reproductive Medicine</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Insights</h4>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><a href="/" onClick={handleScrollToTestimonials}>Sukam Voices</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><Link to="/Contact">Address</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/access-lab-reports">Lab Access Reports</Link></li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-social">
        <a
          href="https://www.facebook.com/sukamspeciality/"
          className="social-icon facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/sukamspecialityclinic/"
          className="social-icon instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/919449628823?text=Hi%20Sukam%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
          className="social-icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:sukamspecialityclinic@gmail.com?subject=Appointment%20Request&body=Hi%20Sukam%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
          className="social-icon email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.google.com/maps?ll=12.913351,77.538644&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=Sukam%20Speciality%20%26%20Fertility%20Clinic"
          className="social-icon map"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt />
        </a>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Sukam Speciality and Fertility Clinic, Inc.<br />All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
