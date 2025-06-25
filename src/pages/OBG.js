import React from 'react';
import { Link } from "react-router-dom";
import './ObstetricsGynaecology.css';
// import heroBg from '../assets/OBG.jpg';
import anitha from '../assets/profile1.png';

import OBG1 from '../assets/OBG/1.png';
import OBG2 from '../assets/OBG/2.png';
import OBG3 from '../assets/OBG/3.png';
import OBG4 from '../assets/OBG/4.png';
import OBG5 from '../assets/OBG/5.png';
import OBG6 from '../assets/OBG/6.png';
import OBG7 from '../assets/OBG/7.png';
import OBG8 from '../assets/OBG/8.png';
import OBG9 from '../assets/OBG/9.png';
import OBG10 from '../assets/OBG/10.png';
import OBG11 from '../assets/OBG/11.png';
import OBG12 from '../assets/OBG/12.png';
import OBG13 from '../assets/OBG/13.png';
import OBG14 from '../assets/OBG/14.png';
import OBG15 from '../assets/OBG/15.png';
import OBG16 from '../assets/OBG/16.png';
import OBG17 from '../assets/OBG/17.png';
import OBG18 from '../assets/OBG/18.png';
import OBG19 from '../assets/OBG/19.png';
import OBG20 from '../assets/OBG/20.png';

const treatmentData = {
  "Pregnancy & Antenatal Care": [
  {
    img: OBG1,
    title: "Normal Pregnancy Care",
    desc: "Growing life with love, one heartbeat at a time.",
  },
  {
    img: OBG2,
    title: "High-Risk Pregnancy Care",
    desc: "Special care for special journeys!",
  },
  {
    img: OBG3,
    title: "Precious Pregnancy",
    desc: "When every heartbeat is a miracle.",
  },
  {
    img: OBG4,
    title: "Ectopic Pregnancy",
    desc: "A twist in the journey of life that needs urgent attention.",
  },
  {
    img: OBG5,
    title: "Nutrition and Exercise in Pregnancy",
    desc: "Fuel the bump, move with purpose!",
  },
],

"Labor & Delivery": [
  {
    img: OBG6,
    title: "Normal Labor",
    desc: "Nature’s way of saying, “It’s showtime!”",
  },
  {
    img: OBG7,
    title: "Pre-term Labor",
    desc: "When little feet can’t wait to meet you.",
  },
  {
    img: OBG8,
    title: "Bleeding in Pregnancy",
    desc: "A red flag on the road to motherhood.",
  },
  {
    img: OBG9,
    title: "Operative Deliveries",
    desc: "When safe arrival needs surgical precision.",
  },
  {
    img: OBG10,
    title: "Intra and Postpartum Care",
    desc: "Caring beyond the crib and into recovery.",
  },
],

"Menstrual & Hormonal Health": [
  {
    img: OBG11,
    title: "Menstrual Irregularities",
    desc: "When your monthly guest gets unpredictable.",
  },
  {
    img: OBG12,
    title: "Uterine Fibroids",
    desc: "Benign but bothersome roommates in the womb.",
  },
  {
    img: OBG13,
    title: "Ovarian Diseases",
    desc: "Silent disruptors of hormonal harmony.",
  },
  {
    img: OBG14,
    title: "PCOD / PCOS",
    desc: "When hormones dance out of rhythm, but hope stays in tune.",
  },
  {
    img: OBG15,
    title: "Abnormal Uterine Bleeding",
    desc: "When your body speaks through the bleed.",
  },
],

"Gynecologic & Reproductive Wellness": [
  {
    img: OBG16,
    title: "Cervical Cancer",
    desc: "Preventable, detectable, beatable.",
  },
  {
    img: OBG17,
    title: "Uterine and Ovarian Cancers",
    desc: "Guarding the core of womanhood.",
  },
  {
    img: OBG18,
    title: "Menarche to Menopausal Care",
    desc: "From first flow to final pause – complete care.",
  },
  {
    img: OBG19,
    title: "Family Planning",
    desc: "Your future, your family, your choice.",
  },
  {
    img: OBG20,
    title: "Hysteroscopy and Hystero - Laparoscopy",
    desc: "A peek inside to find and fix.",
  },
],
};
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
            <div className="treatment-categories-box-anitha-obg">
                <h2>Our Treatment Categories</h2>
                <div className="treatment-grid-anitha-obg">
                <div className="treatment-card-anitha-obg">
                          <span className="icon-large">👶</span>
                          <h3>Normal Pregnancy Care</h3>
                          <p>Growing life with love, one heartbeat at a time.</p>
                        </div>

                        <div className="treatment-card-anitha-obg">
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
