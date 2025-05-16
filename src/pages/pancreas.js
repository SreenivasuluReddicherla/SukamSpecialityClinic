import React from "react";
import "./PregnancyTreatment.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
import doctorImg from '../assets/manoj.avif';
import heroBg from '../assets/pancreas.png';
import { Link } from "react-router-dom";

const PancreaticProblem = () => {
  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">Pancreatic Problems</h1>
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
          <img src={img1} alt="Pancreatic Problems Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Overview</h2>
            <p>
              The pancreas plays a crucial role in digestion and blood sugar regulation. Pancreatic disorders, including 
              pancreatitis, cysts, and tumors, require timely diagnosis and management to prevent severe complications.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Key Aspects" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Key Aspects</h2>
            <ul>
              <li>Symptoms: Abdominal Pain, Nausea, Jaundice</li>
              <li>Diagnostic Tests: MRI, CT Scan, Endoscopic Ultrasound</li>
              <li>Treatment: Medications, Surgery, Lifestyle Changes</li>
              <li>Early Detection Improves Outcomes</li>
              <li>Minimally Invasive Surgical Approaches</li>
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
                MBBS, MS (Surg), FMAS, PGDHE<br />
                General, Laparoscopic, and Endoscopic Surgeon
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

export default PancreaticProblem;
