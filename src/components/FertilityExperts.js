import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FertilityExperts.css";
import manoj from "../assets/profile2.png";
import anitha from "../assets/profile1.png";

// Expert Data (Same IDs as in DoctorProfile.js)
const experts = [
  {
    id: "dr-manoj-karthik",
    name: "Dr. Manoj Karthik S",
    qualification: "MBBS, MS (Gen Surg), FMAS, PGDHE",
    designation: "Senior General , Laparoscopic and Endoscopic Surgeon",
    category: ["General Surgery"],
    image: manoj,
  },
  {
    id: "dr-anitha-a-manoj",
    name: "Dr. Anitha A Manoj",
    qualification: "MBBS, MS (OBG), FMAS, FRM",
    designation: "Senior Consultant Obstetrician, Gynaecologist and Fertility Specialist",
    category: ["Obstetrics & Gynaecology", "Reproductive Medicine"],
    image: anitha,
  },
];

const FertilityExperts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const filteredExperts =
    activeTab === "All"
      ? experts
      : experts.filter((expert) => expert.category.includes(activeTab));

  return (
    <section className="experts-section">
      <h2 className="experts-heading">Sukam Experts</h2>
      <p className="experts-subtext">Our experts are here to help you.</p>

      {/* Category Tabs */}
      <div className="category-tabs">
        {["All", "General Surgery", "Obstetrics & Gynaecology", "Reproductive Medicine"].map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Expert Cards */}
      <div className="experts-grid">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className={`expert-card ${expert.id}`}
            onClick={() => navigate(`/doctor-profile/${expert.id}`)}
          >
            <div className="expert-image">
              <img src={expert.image} alt={expert.name} />
            </div>
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-qualification">{expert.qualification}</p>
            <p className="expert-designation">{expert.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FertilityExperts;
