import React, { useState } from "react";
import "./PregnancyTreatment.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
import doctorImg from '../assets/Anitha.webp';
import heroBg from '../assets/pregnency1.jpg';
import { Link } from "react-router-dom";

const pregnancyInfo = {
  "Normal Pregnancy": {
    title: "Normal Pregnancy",
    content: `
**Normal Delivery & Caesarean Section (LSCS)**

**What is it?**  
Childbirth can occur through a **normal vaginal delivery** or **Lower Segment Caesarean Section (LSCS)** when medically necessary.

**Why are both important?**  
- **Normal delivery** is often the first choice when the pregnancy is low-risk, as it supports faster recovery and immediate mother-child bonding.  
- **Caesarean delivery (C-section)** is vital when complications arise — such as fetal distress, breech presentation, or placenta previa — ensuring the safety of both mother and baby.

**How common is it?**  
In India, about **20–25% of births** are via C-section. However, many pregnancies still result in safe, natural deliveries with proper prenatal care and monitoring.

**How does it help?**  
Having a personalized, well-planned delivery approach — whether natural or surgical — guarantees the **health and safety of the mother and child**, which is the core goal of any pregnancy care plan.
`
  },

  "High-Risk Pregnancy": {
    title: "High-Risk Pregnancy",
    content: `
**Understanding High-Risk Pregnancy**

**What is it?**  
A high-risk pregnancy means that there are potential complications that could affect the **health of the mother, baby, or both**. This can result from **pre-existing conditions** or issues that develop during pregnancy.

**Causes & Risk Factors:**  
- **Gestational Diabetes**
- **High Blood Pressure / Preeclampsia**
- **Age (Teenage or Over 35)**
- **Multiple Pregnancies (Twins or More)**
- **Previous Miscarriages**
- **Pre-existing Conditions** (thyroid, heart problems, etc.)

**Why Specialized Care is Needed?**  
High-risk pregnancies require **frequent medical supervision** including:
- Additional **ultrasounds** and **lab tests**
- **Fetal monitoring**
- **Specialist consultations**
- **Hospital-based delivery planning**

**How does it help?**  
Early identification and continuous monitoring in a high-risk pregnancy greatly reduce complications and ensure the best possible outcome for both mother and child.
`
  },

  "Precious Pregnancy": {
    title: "Precious Pregnancy",
    content: `
**What is Precious Pregnancy?**

**Definition:**  
A "precious pregnancy" is one that follows **struggles with infertility**, **multiple miscarriages**, or is conceived through **assisted reproductive techniques** such as IVF or IUI. These pregnancies are **emotionally and medically significant**.

**Why is it special?**  
- It is a result of **long-term emotional investment**.
- Involves **special care, support, and close monitoring**.
- Associated with **heightened emotional attachment** and the need for sensitive handling.

**Medical Management Includes:**  
- **Frequent Scans** to track fetal development  
- **Regular Hormonal Support & Medication**  
- **Emotional Counseling & Stress Management**  
- **Advanced Monitoring** for mother and baby’s health  
- Special delivery planning depending on maternal age, previous history, and fetal well-being

**How does it help?**  
With **compassionate care and medical precision**, a precious pregnancy is nurtured with a **tailored care plan** that ensures both physical and emotional well-being of the expecting couple and their baby.
`
  }
};

const PregnancyTreatment = () => {
  const [selectedTopic, setSelectedTopic] = useState("Normal Pregnancy");

  return (
    <div className="pregnancy-treatment-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="treatment-title">General Surgery</h1>
      </div>
          <div className="expert-consult-container">
          <div className="doctor-card">
            <img src={doctorImg} alt="Dr. Anitha A Manoj" className="doctor-img" />
            <div className="doctor-details">
              <h2 className="doctor-name">Dr. Anitha A Manoj</h2>
              <p className="doctor-qualification">
                MBBS, MS, FMAS & FRM<br />
                Obstetrician & Gynaecologist, Fertility Specialist
              </p>
              <p className="doctor-experience"><strong>16+ Years of Experience</strong></p>
              
              {/* Add this button */}
              <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">
                Consult Now
              </Link>
            </div>
          </div>
        </div>
      {/* Advanced Pregnancy Overview Section */}
      <div className="advanced-overview-wrapper">
        {/* Left Side List */}
        <div className="overview-left-list">
          <h2 className="section-title">Pregnancy Types</h2>
          <ul className="topic-list">
            {Object.keys(pregnancyInfo).map((topic) => (
              <li
                key={topic}
                className={`topic-item ${selectedTopic === topic ? "active" : ""}`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
                {selectedTopic === topic && <span className="arrow-icon"> →</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Content */}
        <div className="overview-right-content">
          <h3>{pregnancyInfo[selectedTopic].title}</h3>
          <p>{pregnancyInfo[selectedTopic].content}</p>
        </div>
      </div>

      {/* Doctor's Expertise Section */}
      <div className="expertise-container">
        <h2 className="section-title">Dr. Anitha A Manoj specializes in:</h2><br />
        <ul className="expertise-list">
          <li>Normal Pregnancy</li>
          <li>High-Risk Pregnancy</li>
          <li>Precious Pregnancy</li>
          <li>PCOD</li>
          <li>Uterine / Ovarian surgeries</li>
          <li>Embryo transfer</li>
          <li>Fertility issues</li>
          <li>IUI</li>
          <li>Menopausal care</li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="section">
          <img src={img1} alt="Pregnancy Overview" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Overview</h2>
            <p>
              Pregnancy treatment ensures the health and well-being of the mother and baby.
              It includes regular checkups, ultrasounds, prenatal vitamins, and diet guidance.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={img2} alt="Key Aspects" className="section-img" />
          <div className="text-content">
            <h2 className="section-title">Key Aspects</h2>
            <ul>
              <li>Routine Checkups</li>
              <li>Ultrasound Scans</li>
              <li>Diet and Nutrition</li>
              <li>Exercise and Physical Health</li>
              <li>Childbirth Preparation</li>
            </ul>
          </div>
        </div>

        {/* Expert Consultation Section */}
        {/* Expert Consultation Section */}
<div className="expert-consult-container">
  <h2 className="section-title">Consult with Our Experts</h2>
  <div className="doctor-card">
    <img src={doctorImg} alt="Dr. Anitha A Manoj" className="doctor-img" />
    <div className="doctor-details">
      <h2 className="doctor-name">Dr. Anitha A Manoj</h2>
      <p className="doctor-qualification">
        MBBS, MS, FMAS & FRM<br />
        Obstetrician & Gynaecologist, Fertility Specialist
      </p>
      <p className="doctor-experience"><strong>16+ Years of Experience</strong></p>
      
      {/* Add this button */}
      <Link to="/doctor-profile/dr-anitha-a-manoj" className="consult-button">
        Consult Now
      </Link>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default PregnancyTreatment;
