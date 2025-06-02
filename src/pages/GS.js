import React from 'react';
import { Link } from "react-router-dom";
import './GeneralSurgery.css';
// import heroBg from '../assets/GS.jpg';
import manoj from '../assets/profile2.png';

import GS1 from '../assets/GS/GS1.png';
import GS2 from '../assets/GS/GS2.png';
import GS3 from '../assets/GS/GS3.png';
import GS4 from '../assets/GS/GS4.png';
import GS5 from '../assets/GS/GS5.png';
import GS6 from '../assets/GS/GS6.png';
import GS7 from '../assets/GS/GS7.png';

const GeneralSurgeryPage = () => {
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner-gs">
        <div className="hero-section-gs">
        </div>
        <div className="surgery-hero-text-gs">
          <h1>Comprehensive General Surgery Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box-manoj">
                <img src={manoj} alt="Dr. Manoj Karthik" className="doctor-img-manoj" />
                <h2>Dr. Manoj Karthik S</h2>
                <p className="qualification-manoj">MBBS, MS (Gen Surg), FMAS, PGDHE</p>
                <p className="designation-manoj">Senior General , Laparoscopic and Endoscopic Surgeon </p>
                <ul className="expertise-list">
                    <li><span>👨‍⚕️</span> 22+ Years of Surgical Experience</li>
                    <li><span>🔧</span> Laparoscopic surgeries (gallbladder, appendix, hernia)</li>
                    <li><span>💉</span> Anorectal procedures (piles, fissure, fistula)</li>
                    <li><span>🦋</span> Thyroid and breast surgeries</li>
                    <li><span>🍽️</span> Gastrointestinal surgeries</li>
                    <li><span>🚨</span> Surgical emergencies</li>
                </ul>
                <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj">
                        Consult Now
                </Link>
            </div>

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box-manoj">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-manoj">
                
                  <div className="treatment-card-manoj">
                    {/* <Link to="/treatments/IndividualTreatment" className="treatment-card-manoj"> */}
                    <img src={GS1} alt="Swelling in the Skin" className="icon-large" />
                    <h3>Swelling in the Skin</h3>
                    <p>A whole spectrum.</p>
                    {/* </Link> */}
                  </div>
                      <div className="treatment-card-manoj">
                        <img src={GS2} alt="Skin Infections" className="icon-large" />
                        <h3>Skin Infections</h3>
                        <p>Burning coal beneath the surface.</p>
                      </div>

                      <div className="treatment-card-manoj">
                      <img src={GS3} alt="Diabetic Foot Ulcer" className="icon-large" />
                        <h3>Diabetic Foot Ulcer</h3>
                        <p>When prevention becomes life-saving.</p>
                      </div>

                      <div className="treatment-card-manoj">
                      <img src={GS4} alt="Peripheral Arterial Occlusion" className="icon-large" />
                        <h3>Peripheral Arterial Occlusion</h3>
                        <p>Heart attack of the legs.</p>
                      </div>

                      <div className="treatment-card-manoj">
                      <img src={GS5} alt="Varicose Veins" className="icon-large" />
                        <h3>Varicose Veins</h3>
                        <p>Laser and minimally invasive treatments for varicose veins.</p>
                      </div>

                      <div className="treatment-card-manoj">
                      <img src={GS6} alt="Deep Vein Thrombosis" className="icon-large" />
                        <h3>Deep Vein Thrombosis</h3>
                        <p>Punishment of immobilisation.</p>
                      </div>

                      <div className="treatment-card-manoj">
                      <img src={GS7} alt="Deep Vein Thrombosis" className="icon-large" />
                        <h3>Thyroid Swellings</h3>
                        <p>Midline neck concerns explained.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">⚡</span>
                        <h3>Thyrotoxicosis</h3>
                        <p>Life in the fast lane.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🧠</span>
                        <h3>Neck Nodes</h3>
                        <p>Infective or neoplastic? We diagnose both.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🐭</span>
                        <h3>Fibroadenoma</h3>
                        <p>Breast mouse?? We investigate it.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">😖</span>
                        <h3>Mastalgia</h3>
                        <p>Blame the hormones?!?!?!</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🤱</span>
                        <h3>Breast Abscess</h3>
                        <p>Lactating mothers – beware.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🩸</span>
                        <h3>UGI Bleed</h3>
                        <p>Vomiting blood? It's time to act.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🎁</span>
                        <h3>Acute Abdomen</h3>
                        <p>Pandora’s box of abdominal emergencies.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🚩</span>
                        <h3>LGI Bleed</h3>
                        <p>Tricky affair — but treatable.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🌋</span>
                        <h3>GERD</h3>
                        <p>When acid strikes back.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🚱</span>
                        <h3>Achalasia Cardia</h3>
                        <p>Dysphagia for liquids – fixable with modern care.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">⚠️</span>
                        <h3>Barrett’s Oesophagus</h3>
                        <p>Premalignant but manageable.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">💨</span>
                        <h3>Dyspepsia</h3>
                        <p>Gas & bloating shouldn't ruin your day.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🚧</span>
                        <h3>Gastric Outlet Obstruction</h3>
                        <p>Less common but still crucial.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🔒</span>
                        <h3>Intestinal Obstruction</h3>
                        <p>When food doesn’t reach the end.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🍔</span>
                        <h3>Fatty Liver</h3>
                        <p>Thanks to preventive health checkups, now catchable early.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🫀</span>
                        <h3>Chronic Liver Disease</h3>
                        <p>To love you need lover; to live you need liver!</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🌴</span>
                        <h3>Liver Abscess</h3>
                        <p>The tropical disease you don’t want to ignore.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🪨</span>
                        <h3>Gall Stone Disease</h3>
                        <p>From asymptomatic to life-threatening.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🟡</span>
                        <h3>Obstructive Jaundice</h3>
                        <p>Surgical jaundice – diagnosed and treated.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">📈</span>
                        <h3>Acute Pancreatitis</h3>
                        <p>Needs a step-up approach.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🍑</span>
                        <h3>Piles</h3>
                        <p>Is it really? We help confirm and cure.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🥵</span>
                        <h3>Acute Fissure in Ano</h3>
                        <p>Painful bleeding? Let’s fix it.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🪑</span>
                        <h3>Perianal Abscess</h3>
                        <p>Unable to sit in a chair? You’re not alone.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🌙</span>
                        <h3>BPH</h3>
                        <p>The nocturnal nightmare for men.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🥪</span>
                        <h3>Hernia</h3>
                        <p>Our bread & butter surgery – safe and reliable.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">💧</span>
                        <h3>Hydrocele</h3>
                        <p>Fluid in the scrotum – no longer a mystery.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🔑</span>
                        <h3>Minimally Invasive Surgery</h3>
                        <p>The keyhole to faster recovery.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">💡</span>
                        <h3>LASER Surgery</h3>
                        <p>The buzz word in modern surgical care.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🤖</span>
                        <h3>Robotic Surgery</h3>
                        <p>The future, today.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🚭</span>
                        <h3>Carcinoma Oral Cavity</h3>
                        <p>Conquer the gutka habit, protect your life.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🌞</span>
                        <h3>Carcinoma Skin</h3>
                        <p>Sun, sun, sun – but protect your skin.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🧼</span>
                        <h3>Carcinoma Penis</h3>
                        <p>Clear the smegma – stay safe.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🧊</span>
                        <h3>Soft Tissue Sarcoma</h3>
                        <p>The hidden iceberg you shouldn’t ignore.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🦋</span>
                        <h3>Carcinoma Thyroid</h3>
                        <p>One of the better ones!!!</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🎗️</span>
                        <h3>Carcinoma Breast</h3>
                        <p>Let’s conserve and conquer.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🦴</span>
                        <h3>Carcinoma Oesophagus</h3>
                        <p>Surgery is king here.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🥄</span>
                        <h3>Carcinoma Stomach</h3>
                        <p>Pick it up early and live longer.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🔍</span>
                        <h3>Carcinoma Liver</h3>
                        <p>Vigilance is vital.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🤒</span>
                        <h3>Carcinoma Pancreas</h3>
                        <p>Jaundice with pain? Get checked.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">📉</span>
                        <h3>Carcinoma Colon</h3>
                        <p>Unexplained weight loss needs attention.</p>
                      </div>

                      <div className="treatment-card-manoj">
                        <span className="icon-large">🪑</span>
                        <h3>Carcinoma Anorectum</h3>
                        <p>The sphincter is the key to care.</p>
                      </div>

                </div>
                </div>

    </section>
    <section className="department-overview-manoj">
        <div className="overview-content-manoj">
          <h2 className="overview-title-manoj">About Our General Surgery Department</h2>
          <p className="overview-description-manoj">
            At Sukham Speciality Clinic, our General Surgery department delivers precision-based care 
            using minimally invasive techniques, modern tools, and compassionate expertise. 
            We prioritize safe outcomes and faster recovery for every patient.
          </p>
        </div>
        <div className="why-choose-section-manoj">
          <h3 className="why-title-manoj">Why Choose Us?</h3>
          <div className="benefits-grid-manoj">
            <div className="benefit-card-manoj">
              <i className="fas fa-user-md"></i>
              <h4>Expert Surgeons</h4>
              <p>Certified professionals with years of advanced surgical experience.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-microscope"></i>
              <h4>Advanced Tools</h4>
              <p>Equipped with the latest laparoscopic and diagnostic technologies.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-hand-holding-heart"></i>
              <h4>Personalized Care</h4>
              <p>Tailored recovery plans with hands-on pre & post-operative support.</p>
            </div>
            <div className="benefit-card-manoj">
              <i className="fas fa-clinic-medical"></i>
              <h4>Hygienic Facility</h4>
              <p>Modern infrastructure that ensures patient safety and comfort.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralSurgeryPage;
