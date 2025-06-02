import React from "react";
import "./Location1.css"; // Styling
// import clinicImg from "../assets/gallery1.png"; // Optional: image not used here

const Location1 = () => {
  return (
    <div className="location-container">

      {/* Address Section */}
      <div className="address-section">
        <h2>Clinic Address</h2>
        <p>Sukam Speciality Clinic</p>
        <p>428, Sarvagna Circle, Arehalli, AGS Layout</p>
        <p>Banashankari 3rd Stage, Bengaluru - 560 061</p>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <h2>Find Us on Google Maps</h2>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.912407273033!2d77.53606907507546!3d12.913351087396727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb603f2f0fb%3A0x1d967d73715c6865!2sSukam%20Speciality%20%26%20Fertility%20Clinic%20%7C%20Most%20Trusted%20Clinic%20for%20General%20Surgery%2C%20Obstetrics%20%26%20Gynaecology%20and%20Infertility%20Care!5e0!3m2!1sen!2sin!4v1743764007251!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }} // ✅ Fix here
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
      
    </div>
  );
};

export default Location1;
