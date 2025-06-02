import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExperienceSection.css";
import doctorImg from "../assets/expertise.jpg";

const ExperienceSection = () => {
  const navigate = useNavigate();

  const handleViewLocation = () => {
    navigate("/contact");
  };

  const handleConnectNow = () => {
    navigate("/appointment");
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
  
        <div className="experience-content">
          <h1 className="experience-title animate-fade-slide">
            Where Hope Meets Expertise
            <span className="experience-sub"> – Bangalore, India</span>
          </h1>
          <p className="experience-desc animate-fade-slide">
          Sukam Specialty Fertility Clinic is a leading healthcare centre dedicated to surgical, obstetric, gynaecological & advanced infertility treatments and specialized care. Equipped with state-of-the-art infrastructure and cutting-edge technology, Sukam aims to provide comprehensive solutions for individuals and couples seeking medical help. Founded by a team of experienced medical professionals and healthcare specialists, the clinic is led by Dr. Manoj Karthik S, an experienced laparoscopic surgeon and endoscopist and Dr. Anitha A. Manoj, a renowned gynecologist and fertility expert. Sukam is recognized for its high success rates, patient-centric approach, and commitment to delivering compassionate and effective treatments.
          </p>
          <div className="experience-buttons animate-fade-slide">
            <button className="btn blue-btn" onClick={handleViewLocation}>
              View Location
            </button>
            <button className="btn border-btn" onClick={handleConnectNow}>
              Connect Now
            </button>
          </div>
        </div>
        <div className="experience-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
