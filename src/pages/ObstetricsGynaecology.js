import React from 'react';
import { Link } from "react-router-dom";
import './ObstetricsGynaecology.css';
// import heroBg from '../assets/OBG.jpg';
import anitha from '../assets/profile1.png';

const ObstetricsGynaecology = () => {
  return (
    <div className="obg-page">
      {/* Top Banner Section */}
      <div className="surgery-banner-obg">
        <div className="hero-section-obg" >
        </div>
        <div className="surgery-hero-text-obg">
          <h1>Comprehensive Obstetrics Gynaecology Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha-obg">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section">
            {/* Left: Doctor Profile & Expertise */}
            <div className="doctor-profile-box-anitha">
                <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img-anitha" />
                <h2>Dr. Anitha A Manoj</h2>
                <p className="qualification-anitha">MBBS, MS (OBG), FMAS, FRM</p>
                <p className="designation-anitha">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
                <ul className="expertise-list">
                    <li className= "year-of-epxerience"><span >👨‍⚕️</span> 16+ Years of Experience</li>
                    <li><span>🧬</span> Infertility evaluation and treatment</li>
                    <li><span>🤰</span> High-risk pregnancy care</li>
                    <li><span>🧫</span> Uterine and Ovarian disorders</li>
                    <li><span>🩺</span> Menstrual and hormonal disorders</li>
                    <li><span>🔬</span> Hystero-Laparoscopic surgeries</li>
                </ul>
                <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha-obg">
                        Consult Now
                </Link>
            </div>
            

            {/* Right: Treatment Categories */}
            <div className="treatment-categories-box-anitha">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-anitha">
                <div className="treatment-card-anitha">
                          <span className="icon-large">👶</span>
                          <h3>Normal Pregnancy Care</h3>
                          <p>Growing life with love, one heartbeat at a time.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🩺</span>
                          <h3>High-Risk Pregnancy Care</h3>
                          <p>Special care for special journeys!</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">💖</span>
                          <h3>Precious Pregnancy</h3>
                          <p>When every heartbeat is a miracle.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">⚠️</span>
                          <h3>Ectopic Pregnancy</h3>
                          <p>A twist in the journey of life that needs urgent attention.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🥗</span>
                          <h3>Nutrition and Exercise in Pregnancy</h3>
                          <p>Fuel the bump, move with purpose!</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🌼</span>
                          <h3>Normal Labor</h3>
                          <p>Nature’s way of saying, “It’s showtime!”</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">👣</span>
                          <h3>Pre-term Labor</h3>
                          <p>When little feet can’t wait to meet you.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🚨</span>
                          <h3>Bleeding in Pregnancy</h3>
                          <p>A red flag on the road to motherhood.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🔪</span>
                          <h3>Operative Deliveries</h3>
                          <p>When safe arrival needs surgical precision.</p>
                        </div>
                        <div className="treatment-card-anitha">
                          <span className="icon-large">🔪</span>
                          <h3>Intra and Postportum Care
                          </h3>
                          <p>Caring beyond the crib and into recovery.</p>
                        </div>
                        <div className="treatment-card-anitha">
                          <span className="icon-large">🩸</span>
                          <h3>Menstrual Irregularities</h3>
                          <p>When your monthly guest gets unpredictable.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🎯</span>
                          <h3>Uterine Fibroids</h3>
                          <p>Benign but bothersome roommates in the womb.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🧬</span>
                          <h3>Ovarian Diseases</h3>
                          <p>Silent disruptors of hormonal harmony.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🛡️</span>
                          <h3>Cervical Cancer</h3>
                          <p>Preventable, detectable, beatable.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🏥</span>
                          <h3>Uterine and Ovarian Cancers</h3>
                          <p>Guarding the core of womanhood.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">📉</span>
                          <h3>Abnormal Uterine Bleeding</h3>
                          <p>When your body speaks through the bleed.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🔄</span>
                          <h3>Menarche to Menopausal Care</h3>
                          <p>From first flow to final pause – complete care.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">⚖️</span>
                          <h3>PCOD / PCOS</h3>
                          <p>When hormones dance out of rhythm, but hope stays in tune.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">👨‍👩‍👧</span>
                          <h3>Family Planning</h3>
                          <p>Your future, your family, your choice.</p>
                        </div>

                        <div className="treatment-card-anitha">
                          <span className="icon-large">🔬</span>
                          <h3>Histero-Laparoscopy</h3>
                          <p>A peek inside to find and fix.</p>
                        </div>

                </div>
              </div>

        </section>



      {/* Overview and Key Aspects */}
      <section className="department-overview-anitha-og">
          <div className="overview-content-anitha-og">
            <h2 className="overview-title-anitha-og">About Our Obstetrics & Gynecology Department</h2>
            <p className="overview-description-anitha-og">
              Our Obstetrics & Gynecology department at Sukham Speciality Clinic is dedicated to women’s 
              health across all stages of life—from adolescence to pregnancy, childbirth, and menopause. 
              We blend compassionate care with modern treatments for every woman’s unique needs.
            </p>
          </div>

          <div className="why-choose-section-anitha-og">
            <h3 className="why-title-anitha-og">Why Choose Us?</h3>
            <div className="benefits-grid-anitha-og">
              <div className="benefit-card-anitha-og">
                <i className="fas fa-female"></i>
                <h4>Holistic Women's Care</h4>
                <p>Comprehensive health services tailored to each stage of a woman’s life.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-baby"></i>
                <h4>Safe Pregnancy & Delivery</h4>
                <p>Expert prenatal, birthing, and postnatal care in a nurturing environment.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-heartbeat"></i>
                <h4>Advanced Diagnostics</h4>
                <p>Ultrasound, scans, and lab facilities ensure accurate and timely results.</p>
              </div>
              <div className="benefit-card-anitha-og">
                <i className="fas fa-user-nurse"></i>
                <h4>Compassionate Team</h4>
                <p>Female-friendly staff and gynecologists who listen, support, and guide.</p>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default ObstetricsGynaecology;
