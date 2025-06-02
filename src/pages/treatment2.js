import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./treatment1.css";
import founder2 from "../assets/manoj.avif";
import pregnancyImg from "../assets/1.jpg";
import ivfImg from "../assets/2.jpg";
import fertilityImg from "../assets/3.jpg";
import gynaeImg from "../assets/4.jpg";

const Treatment2Page = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pregnancy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewDetails = (path) => {
    navigate(path);
  };

  const treatments = {
    pregnancy: {
      title: "Pregnancy Care",
      image: pregnancyImg,
      description:
        "Personalized pregnancy support from conception to delivery, ensuring both mother and baby are healthy and safe.",
      path: "/treatments/pregnancy",
    },
    ivf: {
      title: "IVF Treatments",
      image: ivfImg,
      description:
        "Advanced IVF options for couples facing fertility challenges, designed with empathy and expertise.",
      path: "/treatments/ivf",
    },
    fertility: {
      title: "Fertility Enhancements",
      image: fertilityImg,
      description:
        "Comprehensive counseling and treatments for fertility-related concerns in both men and women.",
      path: "/treatments/fertility",
    },
    gynae: {
      title: "Gynaecology Services",
      image: gynaeImg,
      description:
        "Full-spectrum gynecological services from PCOD/PCOS to menopause, tailored for women’s well-being.",
      path: "/treatments/gynae",
    },
  };

  return (
    <div className="anitha-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="founder-profile reverse" data-aos="fade-left">
          <img src={founder2} alt="Dr. Manoj Karthik S" className="founder-img" />
          <div className="founder-text">
            <h3>Dr. Manoj Karthik S</h3>
            <p className="founder-subtitle">
            MS (General Surgery) | FMAS | PGDHE | Senior General and Laparoscopic Surgeon | 22+ Years of Experience
            </p>
            <p>
            A veteran surgeon with a calm mind and steady hands, Dr. Manoj Karthik S has spent over two decades in the operating room, managing everything from complex thyroid cases to laparoscopic hernia repairs. His reputation is built not just on skill, but on sound judgment — knowing when to operate, and when not to.
            </p>
            <em>
              “Patients don't come to us for stitches and scars. They come to us for solutions..."
            </em>
          </div>
        </div>
      </section>

 {/* Treatments Tabs */}
 <section className="treatment-tabs">
        <h2 className="section-title">Dr. Manoj’s Expertise In</h2>
        <p className="section-subtitle">Explore areas where Dr. Manoj provides world-class care with compassion and accuracy.</p>

        <div className="tabs">
          {Object.keys(treatments).map((key) => (
            <button
              key={key}
              className={`tab ${activeTab === key ? "active" : ""}`}
              onClick={() => handleTabClick(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content-wrapper">
  <div className="tab-content active">
    <div className="treatment-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>{treatments[activeTab].title}</h3>
          <img src={treatments[activeTab].image} alt={treatments[activeTab].title} />
        </div>
        <div className="card-back">
          <p>{treatments[activeTab].description}</p>
          <button
            className="view-details-btn"
            onClick={() => handleViewDetails(treatments[activeTab].path)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>


    </div>
  );
};

export default Treatment2Page;













