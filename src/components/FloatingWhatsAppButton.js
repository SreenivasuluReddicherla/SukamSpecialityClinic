import React from "react";
import "./FloatingWhatsAppButton.css";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "919108108980"; // Replace with your clinic's WhatsApp number (without '+' or spaces)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
        alt="WhatsApp"
        className="whatsapp-icons"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
