import "./Contact.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaHospitalAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <span className="contact-badge">
            <FaHospitalAlt /> Sukam Clinic
          </span>
          <h1>Maternity & Fertility Speciality</h1>
          {/* <p>
            We are here to support you with maternity, fertility, speciality,
            and compassionate healthcare services.
          </p> */}
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <h2>Get in Touch</h2>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon location-icon" />
              <div>
                <h3>Clinic Address</h3>
                <p>
                  <b>50 Feet Road, Katriguppe Water Tank Circle, BSK 3rd Stage,
                  3rd Phase, Opposite SBI, Bengaluru, Karnataka 560085</b>
                </p>
              </div>
            </div>

            <div className="info-box">
              <FaClock className="info-icon" />
              <div>
                <h3>Working Hours</h3>
                <p><b>Open Daily: 8:00 AM - 9:00 PM</b></p> 
                <p><strong>Sunday (On Appointment Basis only)</strong></p>
              </div>
            </div>

            <div className="phone-numbers">
              <a href="tel:+918108108310" className="phone-btn">
                <FaPhoneAlt /> +91 81081 08310
              </a>

              <a href="tel:+919108108980" className="phone-btn">
                <FaPhoneAlt /> +91 91081 08980
              </a>

              <a href="tel:08026731314" className="phone-btn">
                ☎️ 080 2673 1314
              </a>

              <a
                href="mailto:sukamspecialityclinic@gmail.com"
                className="phone-btn email-btn"
              >
                <FaEnvelope /> sukamspecialityclinic@gmail.com
              </a>

              <a
                href="https://wa.me/919108108980"
                target="_blank"
                rel="noopener noreferrer"
                className="phone-btn whatsapp-btn"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h2>
              <FaMapMarkerAlt className="icon" /> Find Us on Google Maps
            </h2>

            <div className="map-wrapper">
              <iframe
                title="Sukam Maternity & Speciality Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.261270702708!2d77.545740922999!3d12.93105856279173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2308a30fcd%3A0x51e0547b450bb1b!2sSukam%20Maternity%20%26%20Speciality%20Clinic!5e0!3m2!1sen!2sin!4v1766851318910!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;