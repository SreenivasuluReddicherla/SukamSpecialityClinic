import React from 'react';
import { Link } from "react-router-dom";
import './ReproductiveMedicine.css';
// import heroBg from '../assets/RPM.jpg';
import anitha from '../assets/profile1.png';
import { useNavigate } from "react-router-dom";

import RP1 from '../assets/RP/F1.png';
import RP2 from '../assets/RP/F2.png';
import RP3 from '../assets/RP/F3.png';
import RP4 from '../assets/RP/F4.png';
import RP5 from '../assets/RP/F5.png';
import RP6 from '../assets/RP/F6.png';
import RP7 from '../assets/RP/F7.png';

const treatmentData = {
  "Understanding Fertility": [
    {
      img: RP1,
      title: "Infertility - Insights",
      desc: "Every story has its hurdles—let’s decode the “why not yet",
      link: "/InfertilityInsights",
    },
    {
      img: RP2,
      title: "Declining Fertility",
      desc: "When biology slows down, science steps in.",
      link: "/InfertilityInsights",
    },
    {
      img: RP3,
      title: "Male Infertility",
      desc: "Half the equation, equally important.",
      link: "/InfertilityInsights",
    },
  ],
  "Natural Support & First-Line Treatments": [
    {
      img: RP4,
      title: "Natural Pregnancy / OITI",
      desc: "Sometimes, a little guidance brings nature back on track",
      link: "/InfertilityInsights",
    },
    {
      img: RP5,
      title: "IUI",
      desc: "A shortcut for sperm on their journey home.",
      link: "/InfertilityInsights",
    },
  ],
  "Advanced Fertility Treatments": [
    {
      img: RP6,
      title: "IVF & ICSI",
      desc: "Science meets stardust to create life.",
      link: "/InfertilityInsights",
    },
    {
      img: RP7,
      title: "Egg Freezing",
      desc: "Pause your biological clock, not your dreams.",
      link: "/InfertilityInsights",
    },
  ],
};

const ReproductiveMedicine = () => {
  const navigate = useNavigate();
  return (
    <div className="reproductive-page">
      {/* Top Banner Section */}
      <div className="surgery-banner-rp">
        <div className="hero-section-rp" >
        </div>
        <div className="surgery-hero-text-rp">
          <h1>Comprehensive Reproductive Medicine Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-rp">Consult Now</Link>
        </div>
      </div>
<section className="doctor-treatments-section-rp">
  <div className="doctor-profile-box-rp">
    {/* Left Section: Image + Name + Qualification */}
    <div className="doctor-info-left">
      <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img" />
      <div className="doctor-basic-info">
        <h2>Dr. Anitha A Manoj</h2>
        <p className="qualification">MBBS, MS (OBG), FMAS, FRM</p>
        <p className="designation">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
        <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-rp mobile-only">
          Consult Now
        </Link>
      </div>
    </div>

    {/* Right Section: Expertise */}
    <div className="doctor-info-right">
      <ul className="expertise-list">
        <li><span>👨‍⚕️</span> 16+ Years of Surgical Experience</li>
        <li><span>🧬</span> Infertility evaluation and treatment</li>
        <li><span>🤰</span> High-risk pregnancy care</li>
        <li><span>🧫</span> PCOS, fibroids, and endometriosis</li>
        <li><span>🩺</span> Menstrual and hormonal disorders</li>
        <li><span>🔬</span> Laparoscopic gynecologic surgeries</li>
      </ul>
      <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-rp desktop-only">
        Consult Now
      </Link>
    </div>
  </div>
</section>
<div className="treatment-categories-heading-rp">
        <h2>Our Treatment Categories</h2>
        {Object.entries(treatmentData).map(([category, treatments]) => (
        <section key={category} className="treatment-section-block-rp">
          <h3 className="subcategory-heading-rp">{category}</h3>
          <div className="treatment-grid-rp">
            {treatments.map((item, index) => (
              <div className="treatment-card-anitha-rp" key={index}>
                <img src={item.img} alt={item.title} className="icon-large" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button
                  className="knowmore-rp"
                  onClick={() => navigate(item.link)}
                >
                  Know More
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

</div>
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
