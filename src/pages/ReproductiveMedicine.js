import React from 'react';
import { Link } from "react-router-dom";
import './ReproductiveMedicine.css';
import heroBg from '../assets/RPM.jpg';
import anitha from '../assets/profile1.png';

const ReproductiveMedicine = () => {
  return (
    <div className="reproductive-page">
      {/* Top Banner Section */}
      <div className="surgery-banner-rp">
        <div className="hero-section-rp" style={{ backgroundImage: `url(${heroBg})` }}>
        </div>
        <div className="surgery-hero-text-rp">
          <h1>Comprehensive Reproductive Medicine Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box">
                <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img" />
                <h2>Dr. Anitha A Manoj</h2>
                <p className="qualification">MBBS, MS (OBG), FMAS, FRM</p>
                <p className="designation">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
                <ul className="expertise-list">
                    <li><span>👨‍⚕️</span> 16+ Years of Surgical Experience</li>
                    <li><span>🧬</span> Infertility evaluation and treatment</li>
                    <li><span>🤰</span> High-risk pregnancy care</li>
                    <li><span>🧫</span> PCOS, fibroids, and endometriosis</li>
                    <li><span>🩺</span> Menstrual and hormonal disorders</li>
                    <li><span>🔬</span> Laparoscopic gynecologic surgeries</li>
                </ul>
                <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">
                        Consult Now
                </Link>
            </div>

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box">
              <h2>Our Treatment Categories</h2>
              <div className="treatment-grid">
                <div className="treatment-card">
                  <span className="icon-large">🩺</span>
                  <h3>Infetility - Insights
                  </h3>
                  <p>Every story has its hurdles—let’s decode the “why not yet</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🧬</span>
                  <h3>Natural Pregnancy / OITI
                  </h3>
                  <p>Sometimes, a little guidance brings nature back on track</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🩻</span>
                  <h3>IUI</h3>
                  <p>A shortcut for sperm on their journey home.</p>
                </div>
                <div className="treatment-card">
                  <span className="icon-large">🌟</span>
                  <h3>IVF & ICSI</h3>
                  <p>Science meets stardust to create life.</p>
                </div>

                <div className="treatment-card">
                  <span className="icon-large">⏳</span>
                  <h3>Declining Fertility</h3>
                  <p>When biology slows down, science steps in.</p>
                </div>

                <div className="treatment-card">
                  <span className="icon-large">🧬</span>
                  <h3>Male Infertility</h3>
                  <p>Half the equation, equally important.</p>
                </div>

                <div className="treatment-card">
                  <span className="icon-large">🧪</span>
                  <h3>Egg Freezing</h3>
                  <p>Pause your biological clock, not your dreams.</p>
                </div>

              </div> 
            </div>

        </section>

      {/* Overview and Key Aspects */}
      <section className="department-overview-anitha-pm">
          <div className="overview-content-anitha-pm">
            <h2 className="overview-title-anitha-pm">About Our Fertility & Reproductive Medicine Department</h2>
            <p className="overview-description-anitha-pm">
              At Sukham Speciality Clinic, our Fertility Care team provides empathetic, science-driven 
              solutions to help couples on their parenthood journey. We offer personalized, evidence-based 
              reproductive treatments with high success rates.
            </p>
          </div>

          <div className="why-choose-section-anitha-pm">
            <h3 className="why-title-anitha-pm">Why Choose Us?</h3>
            <div className="benefits-grid-anitha-pm">
              <div className="benefit-card-anitha-pm">
                <i className="fas fa-dna"></i>
                <h4>Evidence-Based Treatments</h4>
                <p>Fertility plans crafted from the latest advancements in reproductive science.</p>
              </div>
              <div className="benefit-card-anitha-pm">
                <i className="fas fa-user-friends"></i>
                <h4>Couple-Centered Approach</h4>
                <p>Supportive counseling and diagnosis for both partners, emotionally and medically.</p>
              </div>
              <div className="benefit-card-anitha-pm">
                <i className="fas fa-vial"></i>
                <h4>Advanced IVF & IUI</h4>
                <p>High-tech labs and procedures designed for safety and higher success outcomes.</p>
              </div>
              <div className="benefit-card-anitha-pm">
                <i className="fas fa-hands-helping"></i>
                <h4>End-to-End Support</h4>
                <p>From consultation to conception, we're with you every step of the way.</p>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};
export default ReproductiveMedicine;
