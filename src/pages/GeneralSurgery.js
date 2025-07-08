import React from 'react';
import { Link } from "react-router-dom";
import './GeneralSurgery.css';
// import heroBg from '../assets/GS.jpg';
import manoj from '../assets/profile2.png';
import { useNavigate } from "react-router-dom";

import GS1 from '../assets/GS/GS1.png';
import GS2 from '../assets/GS/GS2.png';
import GS3 from '../assets/GS/GS3.png';
import GS4 from '../assets/GS/GS4.png';
import GS5 from '../assets/GS/GS5.png';
import GS6 from '../assets/GS/GS6.png';
import GS7 from '../assets/GS/GS7.png';
import GS8 from '../assets/GS/GS8.png';
import GS9 from '../assets/GS/GS9.png';
import GS10 from '../assets/GS/GS10.png';
import GS11 from '../assets/GS/GS11.png';
import GS12 from '../assets/GS/GS12.png';
import GS13 from '../assets/GS/GS13.png';
import GS14 from '../assets/GS/GS14.png';
import GS15 from '../assets/GS/GS15.png';
import GS16 from '../assets/GS/GS16.png';
import GS17 from '../assets/GS/GS17.png';
import GS18 from '../assets/GS/GS18.png';
import GS19 from '../assets/GS/GS19.png';
import GS20 from '../assets/GS/GS20.png';
import GS21 from '../assets/GS/GS21.png';
import GS22 from '../assets/GS/GS22.png';
import GS23 from '../assets/GS/GS23.png';
import GS24 from '../assets/GS/GS24.png';
import GS25 from '../assets/GS/GS25.png';
import GS26 from '../assets/GS/GS26.png';
import GS27 from '../assets/GS/GS27.png';
import GS28 from '../assets/GS/GS28.png';
import GS29 from '../assets/GS/GS29.png';
import GS30 from '../assets/GS/GS30.png';
import GS31 from '../assets/GS/GS31.png';
import GS32 from '../assets/GS/GS32.png';
import GS33 from '../assets/GS/GS33.png';
import GS34 from '../assets/GS/GS34.png';
import GS35 from '../assets/GS/GS35.png';
import GS36 from '../assets/GS/GS36.png';
// import GS37 from '../assets/GS/GS49.webp';
// import GS38 from '../assets/GS/GS49.webp';
import GS39 from '../assets/GS/GS49.webp';
// import GS40 from '../assets/GS/GS49.webp';
import GS41 from '../assets/GS/GS41.png';
import GS42 from '../assets/GS/GS42.png';
import GS43 from '../assets/GS/GS43.png';
import GS44 from '../assets/GS/GS44.png';
import GS45 from '../assets/GS/GS45.png';
import GS46 from '../assets/GS/GS46.png';
import GS47 from '../assets/GS/GS47.png';
import GS48 from '../assets/GS/GS48.png';
import GS49 from '../assets/GS/GS49.png';
import GS50 from '../assets/GS/GS50.png';
import GS51 from '../assets/GS/GS51.png';
import GS52 from '../assets/GS/GS52.png';

const treatmentData = {
  "Skin & Vascular Conditions": [
    {
      img: GS1,
      title: "Swelling in the Skin",
      desc: "Lumps and bumps that signal something beneath the surface.",
      link: "/SwellingInTheSkin"
    },
    {
      img: GS2,
      title: "Skin Infections",
      desc: "Red, warm, and angry—your skin’s SOS.",
      link: "/SkinInfections"
    },
    {
      img: GS3,
      title: "Diabetic Foot Ulcer",
      desc: "A small sore with high stakes for diabetics.",
      link: "/DiabeticFootUlcer"
    },
    {
      img: GS4,
      title: "Peripheral Arterial Occlusion",
      desc: "A heart attack for your legs.",
      link: "/PeripheralArterialOcclusion"
    },
    {
      img: GS5,
      title: "Varicose Veins",
      desc: "Veins that wind, bulge, and beg for relief.",
      link: "/VaricoseVeins"
    },
    {
      img: GS6,
      title: "Deep Vein Thrombosis",
      desc: "A quiet clot that can cause a storm.",
      link: "/DeepVeinThrombosis"
    }
  ],

  "Neck & Thyroid Conditions": [
    {
      img: GS7,
      title: "Thyroid Swellings",
      desc: "A lump that may be more than a bump.",
      link: "/ThyroidSwelling"
    },
    {
      img: GS8,
      title: "Thyrotoxicosis",
      desc: "Thyroid in overdrive, body on edge.",
      link: "/Thyrotoxicosis"
    },
    {
      img: GS9,
      title: "Neck Nodes",
      desc: "Swollen glands with stories to tell.",
      link: "/NeckNodes"
    }
  ],

  "Breast Conditions": [
    {
      img: GS10,
      title: "Fibroadenoma",
      desc: "A breast lump that’s more chill than scary.",
      link: "/Fibroadenoma"
    },
    {
      img: GS11,
      title: "Mastalgia",
      desc: "Sore, swollen, and often hormonal.",
      link: "/Mastalgia"
    },
    {
      img: GS12,
      title: "Breast Abscess",
      desc: "A painful boil that needs a quick fix.",
      link: "/BreastAbscess"
    }
  ],

  "Gastrointestinal Conditions": [
    {
      img: GS13,
      title: "Upper Gastrointestinal Bleed",
      desc: "Blood from above, demanding urgent attention.",
      link: "/UpperGIBleed"
    },
    {
      img: GS14,
      title: "Acute Abdomen",
      desc: "Sudden belly pain that screams emergency.",
      link: "/AcuteAbdomen"
    },
    {
      img: GS15,
      title: "Lower Gastrointestinal Bleed",
      desc: "Red alerts from the digestive tract’s lower half.",
      link: "/LowerGIBleed"
    },
    {
      img: GS16,
      title: "GERD",
      desc: "Acid that climbs and burns where it shouldn’t.",
      link: "/GERD"
    },
    {
      img: GS17,
      title: "Achalasia Cardia",
      desc: "A food pipe freeze, mid-meal.",
      link: "/AchalasiaCardia"
    },
    {
      img: GS18,
      title: "Barrett’s Oesophagus",
      desc: "A dangerous twist in chronic reflux.",
      link: "/BarrettEsophagus"
    },
    {
      img: GS19,
      title: "Dyspepsia",
      desc: "Bloating, burning, and meals that fight back.",
      link: "/Dyspepsia"
    },
    {
      img: GS20,
      title: "Gastric Outlet Obstruction",
      desc: "A bottleneck that blocks your appetite.",
      link: "/GastricOutletObstruction"
    },
    {
      img: GS21,
      title: "Intestinal Obstruction",
      desc: "Traffic jam in your gut.",
      link: "/IntestinalObstruction"
    },
    {
      img: GS39,
      title: "Appendicitis",
      desc: "When your appendix calls for help, surgery answers fast.",
      link: "/Appendicitis"
    },
  ],

  "Liver, Gallbladder & Pancreas": [
    {
      img: GS22,
      title: "Fatty Liver",
      desc: "A silent overload that weighs down your liver.",
      link: "/FattyLiver"
    },
    {
      img: GS23,
      title: "Chronic Liver Disease",
      desc: "To love you need a lover; to live, you need a liver!",
      link: "/ChronicLiverDisease"
    },
    {
      img: GS24,
      title: "Liver Abscess",
      desc: "A pocket of pus where none should be.",
      link: "/LiverAbscess"
    },
    {
      img: GS25,
      title: "Gall Stone Disease",
      desc: "Hard stones, sharp pain, soft groans.",
      link: "/GallStoneDisease"
    },
    {
      img: GS26,
      title: "Obstructive Jaundice",
      desc: "Bile backs up, and your eyes show the story.",
      link: "/ObstructiveJaundice"
    },
    {
      img: GS27,
      title: "Acute Pancreatitis",
      desc: "A fiery flare-up deep in your belly.",
      link: "/AcutePancreatitis"
    },
    //  {
    //   img: GS40,
    //   title: "Gallbladder Surgery",
    //   desc: "Removing the troublemaker that causes painful attacks."
    // }
  ],

  "Anorectal Conditions": [
    {
      img: GS28,
      title: "Piles",
      desc: "Pain, itching, and bleeding at the wrong end.",
      link: "/Piles"
    },
    {
      img: GS29,
      title: "Acute Fissure in Ano",
      desc: "A razor-sharp sting with every bathroom trip.",
      link: "/AnalFissure"
    },
    {
      img: GS30,
      title: "Perianal Abscess",
      desc: "A red-hot boil that needs draining, not delaying.",
      link: "/PerianalAbscess"
    }
  ],

  "Urology & General Surgery": [
    {
      img: GS31,
      title: "BPH (Benign Prostatic Hyperplasia)",
      desc: "A growing prostate that slows your flow.",
      link: "/BPH"
    },
    {
      img: GS32,
      title: "Hernia",
      desc: "A bulge that breaks the body’s boundaries.",
      link: "/Hernia"
    },
    {
      img: GS33,
      title: "Hydrocele",
      desc: "A ballooning scrotum filled with fluid, not fun.",
      link: "/Hydrocele"
    }
  ],

  "Surgical Techniques": [
    {
      img: GS34,
      title: "Minimally Invasive Surgery",
      desc: "Small cuts, speedy comebacks.",
      link: "/MinimallyInvasiveSurgery"
    },
    {
      img: GS35,
      title: "LASER Surgery",
      desc: "Light-powered precision, scar-light results.",
      link: "/LASERSurgery",
    },
    {
      img: GS36,
      title: "Robotic Surgery",
      desc: "Surgeon’s skill meets robotic perfection.",
      link: "/RoboticSurgery",
    },
    // {
    //   img: GS37,
    //   title: "Lipoma Removal",
    //   desc: "Soft lumps that are usually harmless, but sometimes need a gentle touch."
    // },
    // {
    //   img: GS38,
    //   title: "Varicose Vein Surgery",
    //   desc: "Veins that wind, bulge, and beg for relief."
    // }
  ],
  "Cancers & Tumors": [
    {
      img: GS41,
      title: "Carcinoma Oral Cavity",
      desc: "Cancer that starts where words begin.",
      link: "/OralCavity",
    },
    {
      img: GS42,
      title: "Carcinoma Skin",
      desc: "A mole that means more than it looks.",
      link: "/Skin",
    },
    {
      img: GS43,
      title: "Carcinoma Penis",
      desc: "A rare cancer that calls for early action.",
      link: "/Penis",
    },
    {
      img: GS44,
      title: "Soft Tissue Sarcoma",
      desc: "A deep-growing threat in muscles or fat.",
      link: "/SoftTissueSarcom",
    },
    {
      img: GS45,
      title: "Carcinoma Thyroid",
      desc: "A neck lump that may signal more.",
      link: "/Thyroid",
    },
    {
      img: GS46,
      title: "Carcinoma Breast",
      desc: "Early checks save more than lives—they save futures.",
      link: "/Breast",
    },
    {
      img: GS47,
      title: "Carcinoma Oesophagus",
      desc: "Swallowing struggles that shouldn't be ignored.",
      link: "/Oesophagus",
    },
    {
      img: GS48,
      title: "Carcinoma Stomach",
      desc: "Silent weight loss may speak volumes.",
      link: "/Stomach",
    },
    {
      img: GS49,
      title: "Carcinoma Liver",
      desc: "Your detox center under siege.",
      link: "/Liver",
    },
    {
      img: GS50,
      title: "Carcinoma Pancreas",
      desc: "Quiet, quick, and deadly if missed.",
      link: "/Pancreas",
    },
    {
      img: GS51,
      title: "Carcinoma Colon",
      desc: "Blood in the stool could be more than a bother.",
      link: "/Colon",
    },
    {
      img: GS52,
      title: "Carcinoma Anorectum",
      desc: "Changes in bowels that could signal cancer.",
      link: "/Anorectum",
    }
  ]
};

const GeneralSurgeryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="general-surgery-page">
      {/* Top Banner Section */}
      <div className="surgery-banner-gs">
        <div className="hero-section-gs">
        </div>
        <div className="surgery-hero-text-gs">
          <h1>Comprehensive General Surgery Care</h1>
          <p>Your health is in expert hands – safe, advanced, and compassionate surgical solutions</p>
          <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj-gs">Consult Now</Link>
        </div>
      </div>

      <section className="doctor-treatments-section-gs">
  <div className="doctor-profile-box-gs">
    {/* Left Section: Image + Name + Qualification */}
    <div className="doctor-info-left-gs">
      <img src={manoj} alt="Dr. Manoj Karthik S" className="doctor-img-gs" />
      <div className="doctor-basic-info-gs">
        <h2>Dr. Manoj Karthik S</h2>
        <p className="qualification-gs">MBBS, MS (Gen Surg), FMAS, PGDHE</p>
        <p className="designation-gs">Senior General , Laparoscopic and Endoscopic Surgeon</p>
        <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj-gs mobile-only">
          Consult Now
        </Link>
      </div>
    </div>

    {/* Right Section: Expertise */}
    <div className="doctor-info-right-gs">
      <ul className="expertise-list-gs">
        <li><span>👨‍⚕️</span> 22+ Years of Surgical Experience</li>
        <li><span>🔧</span> Laparoscopic surgeries (gallbladder, appendix, hernia)</li>
        <li><span>💉</span> Anorectal procedures (piles, fissure, fistula)</li>
        <li><span>🦋</span> Thyroid and breast surgeries</li>
        <li><span>🍽️</span> Gastrointestinal surgeries</li>
        <li><span>🚨</span> Surgical emergencies</li>
      </ul>
      <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-manoj-gs desktop-only">
        Consult Now
      </Link>
    </div>
  </div>
</section>
<div className="treatment-categories-heading-gs">
        <h2>Our Treatment Categories</h2>
        {Object.entries(treatmentData).map(([category, treatments]) => (
        <section key={category} className="treatment-section-block-gs">
          <h3 className="subcategory-heading-gs">{category}</h3>
          <div className="treatment-grid-gs">
            {treatments.map((item, index) => (
              <div className="treatment-card-manoj-gs" key={index}>
                <img src={item.img} alt={item.title} className="icon-large-gs" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button
                  className="knowmore-gs"
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
    <section className="department-overview-manoj">
        <div className="overview-content-manoj">
          <h2 className="overview-title-manoj">About Our General Surgery Department</h2>
          <p className="overview-description-manoj">
            At Sukam Speciality and Fertility Clinic, our General Surgery department delivers precision-based care 
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
