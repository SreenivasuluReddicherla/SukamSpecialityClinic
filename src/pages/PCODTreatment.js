import React from "react";
import "./PregnancyTreatment.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import doctorImg from '../assets/Anitha.webp';
import heroBg from '../assets/PCOD1.png';
import { Link } from "react-router-dom";

const PCODTreatment = () => {
  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">PCOD Treatment</h1>
      </div>

      {/* Doctor's Expertise Section */}
      <div className="expertise-container">
        <h2 className="section-title">Dr. Anitha A Manoj specializes in treating:</h2>
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
          <img src={img1} alt="PCOD Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">What is PCOD?</h2>
            <p>
              PCOD (Polycystic Ovarian Disease) is a hormonal disorder where the ovaries produce 
              multiple immature eggs that later turn into cysts. This leads to irregular periods, 
              infertility, weight gain, and various metabolic issues.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Symptoms and Causes" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Symptoms & Causes</h2>
            <ul>
              <li>Irregular or no periods</li>
              <li>Weight gain, especially around the abdomen</li>
              <li>Excess facial and body hair (Hirsutism)</li>
              <li>Acne and oily skin</li>
              <li>Difficulty in conceiving (Infertility)</li>
              <li>Hair thinning or hair loss</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <img src={img3} alt="PCOD Treatment" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">PCOD Treatment</h2>
            <p>
              PCOD can be managed with lifestyle changes, medications, and medical treatments. 
              Treatment plans include:
            </p>
            <ul>
              <li>Diet and exercise for weight management</li>
              <li>Hormonal therapy to regulate menstrual cycles</li>
              <li>Medications to improve insulin sensitivity</li>
              <li>Fertility treatments for conception</li>
              <li>Skincare treatments for acne and pigmentation</li>
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

export default PCODTreatment;
