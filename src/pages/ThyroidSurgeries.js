import React from "react";
import "./PregnancyTreatment.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
import doctorImg from '../assets/manoj.avif';
import heroBg from '../assets/thyroid.png';
import { Link } from "react-router-dom";

const ThyroidSurgeries = () => {
  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">Thyroid Surgeries</h1>
      </div>

      {/* Doctor's Expertise Section */}
      <div className="expertise-container">
        <h2 className="section-title">Dr. Manoj Karthik S specializes in:</h2><br></br>
        <ul className="expertise-list">
          <li>Thyroid surgeries</li>
          <li>Laser surgeries</li>
          <li>Chronic liver disease</li>
          <li>Thyroid Cancer Surgery</li>
          <li>Fatty liver</li>
          <li>Endoscopy</li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="section">
          <img src={img1} alt="Thyroid Surgery Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Overview</h2>
            <p>
              Thyroid surgeries are performed to remove part or all of the thyroid gland, usually due to 
              conditions like goiter, thyroid nodules, or thyroid cancer. The goal is to restore normal function 
              and prevent further complications.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Key Aspects" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Key Aspects</h2>
            <ul>
              <li>Pre-Surgical Evaluation</li>
              <li>Types of Thyroid Surgeries</li>
              <li>Post-Surgical Recovery</li>
              <li>Hormone Replacement Therapy</li>
              <li>Long-Term Health Management</li>
            </ul>
          </div>
        </div>

        {/* Last Section - Centered */}
        <div className="expert-consult-container">
          <h2 className="section-title">Consult with Our Experts</h2>
          {/* Doctor's Card */}
          <div className="doctor-card">
            <img src={doctorImg} alt="Dr. Manoj Karthik S" className="doctor-img" />
            <div className="doctor-details">
              <h2 className="doctor-name">Dr. Manoj Karthik S</h2>
              <p className="doctor-qualification">
                MBBS, MS (Sug), FMAS, PGDHE<br />
                General, laparoscopic and  Endoscopic Surgeon
              </p>
              <p className="doctor-experience"><strong>22+ Years of Experience</strong></p>
              <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button">
        Consult Now
      </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThyroidSurgeries;
