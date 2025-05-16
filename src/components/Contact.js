import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-card contact-left">
        <h2><FaMapMarkerAlt className="icon" /> Clinic Address</h2>
        <p className="clinic-name">Sukam Speciality Clinic</p>
        <p>428, Sarvagna Circle, Arehalli, AGS Layout</p>
        <p>Banashankari 3rd Stage, Bengaluru - 560 061</p>

        <div className="phone-numbers">
          <a href="tel:+919108108980" className="phone-btn">
            <FaPhoneAlt /> +91 9108108980
          </a>
          <a href="tel:+918108108310" className="phone-btn">
            <FaPhoneAlt /> +91 8108108310
          </a>
          <a href="tel:08026731314" className="phone-btn">
          <span role="img" aria-label="landline">☎️</span> 080 2673 1314
</a>
          <a href="mailto:sukamspecialityclinic@gmail.com" className="phone-btn">
            <FaEnvelope /> sukamspecialityclinic@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-card contact-right">
        <h2><FaMapMarkerAlt className="icon" /> Find Us on Google Maps</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.912407273033!2d77.53606907507546!3d12.913351087396727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb603f2f0fb%3A0x1d967d73715c6865!2sSukam%20Speciality%20%26%20Fertility%20Clinic!5e0!3m2!1sen!2sin!4v1743764007251!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
