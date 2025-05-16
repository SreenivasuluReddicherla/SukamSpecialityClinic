import React from "react";
import "./PregnancyTreatment.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
import doctorImg from "../assets/Anitha.webp";
import heroBg from "../assets/uterine.png";
import { Link } from "react-router-dom";

const UterineOvaryIssues = () => {
  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">Uterine & Ovarian Issues</h1>
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
          <img src={img1} alt="Uterine & Ovarian Issues Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Overview</h2>
            <p>
              Uterine and ovarian disorders affect women’s reproductive health, causing symptoms like pain, irregular periods, 
              infertility, and hormonal imbalances. Early diagnosis and proper treatment are crucial for managing these conditions effectively.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Key Aspects" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Key Aspects</h2>
            <ul>
              <li>Symptoms: Irregular Periods, Pelvic Pain, Infertility</li>
              <li>Diagnostic Tests: Ultrasound, MRI, Laparoscopy</li>
              <li>Treatment: Medications, Surgery, Lifestyle Changes</li>
              <li>Hormonal Therapy for Uterine/Ovarian Health</li>
              <li>Minimally Invasive Surgical Procedures</li>
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

export default UterineOvaryIssues;
