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
import GS8 from '../assets/GS/GS8.webp';

const treatmentData = {
  "Skin & Vascular Conditions": [
    {
      img: GS1,
      title: "Swelling in the Skin",
      desc: "Lumps and bumps that signal something beneath the surface."
    },
    {
      img: GS2,
      title: "Skin Infections",
      desc: "Red, warm, and angry—your skin’s SOS."
    },
    {
      img: GS3,
      title: "Diabetic Foot Ulcer",
      desc: "A small sore with high stakes for diabetics."
    },
    {
      img: GS4,
      title: "Peripheral Arterial Occlusion",
      desc: "A heart attack for your legs."
    },
    {
      img: GS5,
      title: "Varicose Veins",
      desc: "Veins that wind, bulge, and beg for relief."
    },
    {
      img: GS6,
      title: "Deep Vein Thrombosis",
      desc: "A quiet clot that can cause a storm."
    }
  ],

  "Neck & Thyroid Conditions": [
    {
      img: GS7,
      title: "Thyroid Swellings",
      desc: "A lump that may be more than a bump."
    },
    {
      img: GS8,
      title: "Thyrotoxicosis",
      desc: "Thyroid in overdrive, body on edge."
    },
    {
      img: GS8,
      title: "Neck Nodes",
      desc: "Swollen glands with stories to tell."
    }
  ],

  "Breast Conditions": [
    {
      img: GS8,
      title: "Fibroadenoma",
      desc: "A breast lump that’s more chill than scary."
    },
    {
      img: GS8,
      title: "Mastalgia",
      desc: "Sore, swollen, and often hormonal."
    },
    {
      img: GS8,
      title: "Breast Abscess",
      desc: "A painful boil that needs a quick fix."
    }
  ],

  "Gastrointestinal Conditions": [
    {
      img: GS8,
      title: "Upper Gastrointestinal Bleed",
      desc: "Blood from above, demanding urgent attention."
    },
    {
      img: GS8,
      title: "Acute Abdomen",
      desc: "Sudden belly pain that screams emergency."
    },
    {
      img: GS8,
      title: "Lower Gastrointestinal Bleed",
      desc: "Red alerts from the digestive tract’s lower half."
    },
    {
      img: GS8,
      title: "GERD",
      desc: "Acid that climbs and burns where it shouldn’t."
    },
    {
      img: GS8,
      title: "Achalasia Cardia",
      desc: "A food pipe freeze, mid-meal."
    },
    {
      img: GS8,
      title: "Barrett’s Oesophagus",
      desc: "A dangerous twist in chronic reflux."
    },
    {
      img: GS8,
      title: "Dyspepsia",
      desc: "Bloating, burning, and meals that fight back."
    },
    {
      img: GS8,
      title: "Gastric Outlet Obstruction",
      desc: "A bottleneck that blocks your appetite."
    },
    {
      img: GS8,
      title: "Intestinal Obstruction",
      desc: "Traffic jam in your gut."
    }
  ],

  "Liver, Gallbladder & Pancreas": [
    {
      img: GS8,
      title: "Fatty Liver",
      desc: "A silent overload that weighs down your liver."
    },
    {
      img: GS8,
      title: "Chronic Liver Disease",
      desc: "To love you need a lover; to live, you need a liver!"
    },
    {
      img: GS8,
      title: "Liver Abscess",
      desc: "A pocket of pus where none should be."
    },
    {
      img: GS8,
      title: "Gall Stone Disease",
      desc: "Hard stones, sharp pain, soft groans."
    },
    {
      img: GS8,
      title: "Obstructive Jaundice",
      desc: "Bile backs up, and your eyes show the story."
    },
    {
      img: GS8,
      title: "Acute Pancreatitis",
      desc: "A fiery flare-up deep in your belly."
    }
  ],

  "Anorectal Conditions": [
    {
      img: GS8,
      title: "Piles",
      desc: "Pain, itching, and bleeding at the wrong end."
    },
    {
      img: GS8,
      title: "Acute Fissure in Ano",
      desc: "A razor-sharp sting with every bathroom trip."
    },
    {
      img: GS8,
      title: "Perianal Abscess",
      desc: "A red-hot boil that needs draining, not delaying."
    }
  ],

  "Urology & General Surgery": [
    {
      img: GS8,
      title: "BPH (Benign Prostatic Hyperplasia)",
      desc: "A growing prostate that slows your flow."
    },
    {
      img: GS8,
      title: "Hernia",
      desc: "A bulge that breaks the body’s boundaries."
    },
    {
      img: GS8,
      title: "Hydrocele",
      desc: "A ballooning scrotum filled with fluid, not fun."
    }
  ],

  "Surgical Techniques": [
    {
      img: GS8,
      title: "Minimally Invasive Surgery",
      desc: "Small cuts, speedy comebacks."
    },
    {
      img: GS8,
      title: "LASER Surgery",
      desc: "Light-powered precision, scar-light results."
    },
    {
      img: GS8,
      title: "Robotic Surgery",
      desc: "Surgeon’s skill meets robotic perfection."
    },
    {
      img: GS8,
      title: "Lipoma Removal",
      desc: "Soft lumps that are usually harmless, but sometimes need a gentle touch."
    },
    {
      img: GS8,
      title: "Varicose Vein Surgery",
      desc: "Veins that wind, bulge, and beg for relief."
    }
  ],

  "General Surgery": [
    {
      img: GS8,
      title: "Appendicitis",
      desc: "When your appendix calls for help, surgery answers fast."
    },
    {
      img: GS8,
      title: "Gallbladder Surgery (Cholecystectomy)",
      desc: "Removing the troublemaker that causes painful attacks."
    }
  ],

  "Cancers & Tumors": [
    {
      img: GS8,
      title: "Carcinoma Oral Cavity",
      desc: "Cancer that starts where words begin."
    },
    {
      img: GS8,
      title: "Carcinoma Skin",
      desc: "A mole that means more than it looks."
    },
    {
      img: GS8,
      title: "Carcinoma Penis",
      desc: "A rare cancer that calls for early action."
    },
    {
      img: GS8,
      title: "Soft Tissue Sarcoma",
      desc: "A deep-growing threat in muscles or fat."
    },
    {
      img: GS8,
      title: "Carcinoma Thyroid",
      desc: "A neck lump that may signal more."
    },
    {
      img: GS8,
      title: "Carcinoma Breast",
      desc: "Early checks save more than lives—they save futures."
    },
    {
      img: GS8,
      title: "Carcinoma Oesophagus",
      desc: "Swallowing struggles that shouldn't be ignored."
    },
    {
      img: GS8,
      title: "Carcinoma Stomach",
      desc: "Silent weight loss may speak volumes."
    },
    {
      img: GS8,
      title: "Carcinoma Liver",
      desc: "Your detox center under siege."
    },
    {
      img: GS8,
      title: "Carcinoma Pancreas",
      desc: "Quiet, quick, and deadly if missed."
    },
    {
      img: GS8,
      title: "Carcinoma Colon",
      desc: "Blood in the stool could be more than a bother."
    },
    {
      img: GS8,
      title: "Carcinoma Anorectum",
      desc: "Changes in bowels that could signal cancer."
    }
  ]
};

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

      <section className="doctor-treatments-section-rp">
  <div className="doctor-profile-box-rp">
    {/* Left Section: Image + Name + Qualification */}
    <div className="doctor-info-left">
      <img src={manoj} alt="Dr. Manoj Karthik S" className="doctor-img" />
      <div className="doctor-basic-info">
        <h2>Dr. Manoj Karthik S</h2>
        <p className="qualification">MBBS, MS (Gen Surg), FMAS, PGDHE</p>
        <p className="designation">Senior General , Laparoscopic and Endoscopic Surgeon</p>
        <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-rp mobile-only">
          Consult Now
        </Link>
      </div>
    </div>

    {/* Right Section: Expertise */}
    <div className="doctor-info-right">
      <ul className="expertise-list">
        <li><span>👨‍⚕️</span> 22+ Years of Surgical Experience</li>
        <li><span>🔧</span> Laparoscopic surgeries (gallbladder, appendix, hernia)</li>
        <li><span>💉</span> Anorectal procedures (piles, fissure, fistula)</li>
        <li><span>🦋</span> Thyroid and breast surgeries</li>
        <li><span>🍽️</span> Gastrointestinal surgeries</li>
        <li><span>🚨</span> Surgical emergencies</li>
      </ul>
      <Link to="/doctor-profile/dr-manoj-karthik" className="consult-button-rp desktop-only">
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
