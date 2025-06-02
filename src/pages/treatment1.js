import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./treatment1.css";
import founder2 from "../assets/Anitha.webp";
import pregnancyImg from "../assets/1.jpg";
import ivfImg from "../assets/2.jpg";
import fertilityImg from "../assets/3.jpg";
import gynaeImg from "../assets/4.jpg";

const DrAnithaPage = () => {
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
        "Comprehensive prenatal check-ups, delivery plans, and postnatal support to ensure a healthy journey.",
      path: "/treatments/pregnancy",
    },
    ivf: {
      title: "IVF Solutions",
      image: ivfImg,
      description:
        "Personalized IVF treatments using latest technologies and utmost care to increase success rates.",
      path: "/treatments/ivf",
    },
    fertility: {
      title: "Fertility Counselling",
      image: fertilityImg,
      description:
        "Guided diagnosis and support for all fertility-related issues — for both partners.",
      path: "/treatments/fertility",
    },
    gynae: {
      title: "Gynaecology",
      image: gynaeImg,
      description:
        "From PCOS to menopause, complete gynaecological care tailored for women’s health.",
      path: "/treatments/gynae",
    },
  };

  return (
    <div className="anitha-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="founder-profile reverse" data-aos="fade-left">
          <img src={founder2} alt="Dr. Anitha A Manoj" className="founder-img" />
          <div className="founder-text">
            <h3>Dr. Anitha A Manoj</h3>
            <p className="founder-subtitle">
              MS (OBG) | FMAS | FRM | Fertility & Women’s Health Expert | 16+ Years of Experience
            </p>
            <p>
              Driven by compassion and clinical precision, Dr. Anitha has guided hundreds of women through some of their most important life chapters — from first pregnancies to menopause, from PCOD struggles to IVF journeys.
              She’s deeply aware that women’s health is often misunderstood, overlooked, or rushed.
            </p>
            <em>“Whether it’s bringing a new life into this world or helping a woman understand her own body — I treat every case as personal. Because it is.”</em>
          </div>
        </div>
      </section>

      {/* Treatments Tabs */}
      <section className="treatment-tabs">
        <h2 className="section-title">Dr. Anitha’s Expertise In</h2>
        <p className="section-subtitle">Explore areas where Dr. Anitha provides world-class care with compassion and accuracy.</p>

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

export default DrAnithaPage;
