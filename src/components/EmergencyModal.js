import React from "react";
import { FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";
import "./EmergencyModal.css";

const EmergencyModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Emergency Helpline</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>
        <hr />
        <div className="modal-content">
          {/* Emergency Number 1 */}
          <div className="phone-links">
            {/* Phone Number */}
            <div className="phone-number">
              <a href="tel:+919108108980">+91 910 810 8980</a>
            </div>

            {/* Phone Icon */}
            <div className="phone-icon">
              <a href="tel:+919108108980">
                <FaPhoneAlt className="phone-icon" />
              </a>
            </div>

            {/* WhatsApp Icon */}
            <div className="whatsapp-icon">
  <a
    href="https://wa.me/919108108980"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
</div>
          </div>

          {/* Emergency Number 2 */}
          <div className="phone-links">
            <div className="phone-number">
              <a href="tel:+919449628823">+91 9449 6288 23</a>
            </div>
            <div className="phone-icon">
              <a href="tel:+919449628823">
                <FaPhoneAlt className="phone-icon" />
              </a>
            </div>
            <div className="whatsapp-icon">
  <a
    href="https://wa.me/919449628823"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
