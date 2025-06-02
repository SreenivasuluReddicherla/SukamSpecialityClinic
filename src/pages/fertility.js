import React from "react";
import "./PregnancyTreatment.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
import doctorImg from '../assets/Anitha.webp';
import heroBg from '../assets/fertility.jpg'; 
import { Link } from "react-router-dom";

const FertilityIssues = () => {
  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">Fertility Issues</h1>
      </div>

      {/* Doctor's Expertise Section */}
      <div className="expertise-container">
        <h2 className="section-title">Dr. Anitha A Manoj specializes in:</h2><br></br>
        <ul className="expertise-list">
        <li>Normal Pregnancy</li>
          <li>High-Risk Pregnancy</li>
          <li>Precious Pregnancy</li>
          <li>PCOD</li>
          <li>Uterine / Ovarian surgeries </li>
          <li>Embryo transfer</li>
          <li>Fertility issues</li>
          <li>IUI</li>
          <li>Menopausal care</li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="section">
          <img src={img1} alt="Fertility Issues Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Overview</h2>
            <p>
              Fertility issues affect both men and women, making conception difficult.  
              Proper diagnosis, lifestyle modifications, and advanced medical treatments 
              can significantly improve the chances of pregnancy.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Key Aspects" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Key Aspects</h2>
            <ul>
              <li>Causes: Hormonal Imbalance, Age, Genetic Factors</li>
              <li>Medical Tests: Hormone Testing, Ultrasound, Semen Analysis</li>
              <li>Non-Surgical & Surgical Treatments Available</li>
              <li>Advanced Assisted Reproductive Techniques (ART)</li>
              <li>Emotional & Psychological Support for Couples</li>
            </ul>
          </div>
        </div>

        {/* Last Section - Centered */}
        <div className="expert-consult-container">
          <h2 className="section-title">Consult with Our Experts</h2>
          {/* Doctor's Card */}
          <div className="doctor-card">
            <img src={doctorImg} alt="Dr. Anitha A Manoj" className="doctor-img" />
            <div className="doctor-details">
              <h2 className="doctor-name">Dr. Anitha A Manoj</h2>
              <p className="doctor-qualification">
                MBBS, MS, FMAS & FRM<br />
                Obstetrician & Gynaecologist, Fertility Specialist
              </p>
              <p className="doctor-experience"><strong>16+ Years of Experience</strong></p>
              <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">
        Consult Now
      </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FertilityIssues;
