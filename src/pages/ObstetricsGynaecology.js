import React from 'react';
import { Link } from "react-router-dom";
import './ObstetricsGynaecology.css';
// import heroBg from '../assets/OBG.jpg';
import anitha from '../assets/profile1.png';
import { useNavigate } from "react-router-dom";

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
    link: "/NormalPregnancyCare",
  },
  {
    img: OBG2,
    title: "High-Risk Pregnancy Care",
    desc: "Special care for special journeys!",
    link:"/HighRiskPregnancy",
  },
  {
    img: OBG3,
    title: "Precious Pregnancy",
    desc: "When every heartbeat is a miracle.",
    link:"/PreciousPregnancy",
  },
  {
    img: OBG4,
    title: "Ectopic Pregnancy",
    desc: "A twist in the journey of life that needs urgent attention.",
    link:"/EctopicPregnancy",
  },
  {
    img: OBG5,
    title: "Nutrition and Exercise in Pregnancy",
    desc: "Fuel the bump, move with purpose!",
    link:"/NutritionExercisePregnancy",
  },
],

"Labor & Delivery": [
  {
    img: OBG6,
    title: "Normal Labor",
    desc: "Nature’s way of saying, “It’s showtime!”",
    link:"/NormalLabor",
  },
  {
    img: OBG7,
    title: "Pre-term Labor",
    desc: "When little feet can’t wait to meet you.",
    link: "/PretermLabor",
  },
  {
    img: OBG8,
    title: "Bleeding in Pregnancy",
    desc: "A red flag on the road to motherhood.",
    link: "/BleedingInPregnancy"
  },
  {
    img: OBG9,
    title: "Operative Deliveries",
    desc: "When safe arrival needs surgical precision.",
    link: "/OperativeDeliveries"
  },
  {
    img: OBG10,
    title: "Intra and Postpartum Care",
    desc: "Caring beyond the crib and into recovery.",
    link: "/IntraPostpartumCare"
  },
],

"Menstrual & Hormonal Health": [
  {
    img: OBG11,
    title: "Menstrual Irregularities",
    desc: "When your monthly guest gets unpredictable.",
    link: "/MenstrualIrregularities"
  },
  {
    img: OBG12,
    title: "Uterine Fibroids",
    desc: "Benign but bothersome roommates in the womb.",
    link: "/UterineFibroids"
  },
  {
    img: OBG13,
    title: "Ovarian Diseases",
    desc: "Silent disruptors of hormonal harmony.",
    link: "/OvarianDiseases"
  },
  {
    img: OBG14,
    title: "PCOD / PCOS",
    desc: "When hormones dance out of rhythm, but hope stays in tune.",
    link: "/PCODPCOS"
  },
  {
    img: OBG15,
    title: "Abnormal Uterine Bleeding",
    desc: "When your body speaks through the bleed.",
    link: "/AbnormalUterineBleeding"
  },
],

"Gynecologic & Reproductive Wellness": [
  {
    img: OBG16,
    title: "Cervical Cancer",
    desc: "Preventable, detectable, beatable.",
    link: "/CervicalCancer"
  },
  {
    img: OBG17,
    title: "Uterine and Ovarian Cancers",
    desc: "Guarding the core of womanhood.",
    link: "/UterineOvarianCancers"
  },
  {
    img: OBG18,
    title: "Menarche to Menopausal Care",
    desc: "From first flow to final pause – complete care.",
    link: "/MenarcheToMenopause"
  },
  {
    img: OBG19,
    title: "Family Planning",
    desc: "Your future, your family, your choice.",
    link: "/FamilyPlanning"
  },
  {
    img: OBG20,
    title: "Hysteroscopy and Hystero - Laparoscopy",
    desc: "A peek inside to find and fix.",
    link: "/HysteroLaparoscopy"
  },
],
};
const ObstetricsGynaecology = () => {
  const navigate = useNavigate();
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
<section className="doctor-treatments-section-obg">
  <div className="doctor-profile-box-obg">
    {/* Left Section: Image + Name + Qualification */}
    <div className="doctor-info-left-obg">
      <img src={anitha} alt="Dr. Anitha A Manoj" className="doctor-img-obg" />
      <div className="doctor-basic-info-obg">
        <h2>Dr. Anitha A Manoj</h2>
        <p className="qualification">MBBS, MS (OBG), FMAS, FRM</p>
        <p className="designation">Senior Consultant Obstetrician & Gynecologist | Fertility Specialist</p>
        <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha-obg mobile-only">
          Consult Now
        </Link>
      </div>
    </div>

    {/* Right Section: Expertise */}
    <div className="doctor-info-right-obg">
      <ul className="expertise-list-obg">
        <li><span>👨‍⚕️</span> 16+ Years of Surgical Experience</li>
        <li><span>🧬</span> Infertility evaluation and treatment</li>
        <li><span>🤰</span> High-risk pregnancy care</li>
        <li><span>🧫</span> PCOS, fibroids, and endometriosis</li>
        <li><span>🩺</span> Menstrual and hormonal disorders</li>
        <li><span>🔬</span> Laparoscopic gynecologic surgeries</li>
      </ul>
      <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button-anitha-obg desktop-only">
        Consult Now
      </Link>
    </div>
  </div>
</section>
<div className="treatment-categories-heading-obg">
        <h2>Our Treatment Categories</h2>
        {Object.entries(treatmentData).map(([category, treatments]) => (
        <section key={category} className="treatment-section-block-obg">
          <h3 className="subcategory-heading-obg">{category}</h3>
          <div className="treatment-grid-obg">
            {treatments.map((item, index) => (
              <div className="treatment-card-anitha-obg" key={index}>
                <img src={item.img} alt={item.title} className="icon-large-obg" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button
                  className="knowmore-obg"
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
      <section className="department-overview-anitha-obg">
          <div className="overview-content-anitha-obg">
            <h2 className="overview-title-anitha-obg">About Our Obstetrics & Gynecology Department</h2>
            <p className="overview-description-anitha-obg">
              Our Obstetrics & Gynecology department at Sukam Speciality and Fertility Clinic is dedicated to women’s 
              health across all stages of life—from adolescence to pregnancy, childbirth, and menopause. 
              We blend compassionate care with modern treatments for every woman’s unique needs.
            </p>
          </div>

          <div className="why-choose-section-anitha-obg">
            <h3 className="why-title-anitha-obg">Why Choose Us?</h3>
            <div className="benefits-grid-anitha-obg">
              <div className="benefit-card-anitha-obg">
                <i className="fas fa-female"></i>
                <h4>Holistic Women's Care</h4>
                <p>Comprehensive health services tailored to each stage of a woman’s life.</p>
              </div>
              <div className="benefit-card-anitha-obg">
                <i className="fas fa-baby"></i>
                <h4>Safe Pregnancy & Delivery</h4>
                <p>Expert prenatal, birthing, and postnatal care in a nurturing environment.</p>
              </div>
              <div className="benefit-card-anitha-obg">
                <i className="fas fa-heartbeat"></i>
                <h4>Advanced Diagnostics</h4>
                <p>Ultrasound, scans, and lab facilities ensure accurate and timely results.</p>
              </div>
              <div className="benefit-card-anitha-obg">
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
