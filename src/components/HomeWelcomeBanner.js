import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import navigation
import AOS from "aos";
import "aos/dist/aos.css";
import aboutLogo from "../assets/SPIcon1.png"; // ✅ Should be a transparent PNG
import "./HomeWelcomeBanner.css";

const HomeWelcomeBanner = () => {
  const navigate = useNavigate(); // 🧭 Initialize useNavigate

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleAppointmentClick = () => {
    navigate("/appointment"); // 🧭 Navigate on click
  };

  return (
    <section className="home-banner-section" data-aos="fade-up">
      <div className="home-banner-text">
        <h1>
          Expert Care with <span>Devotion</span>
        </h1>
        <p>
        Patients choose Dr. Manoj Karthik S and Dr. Anitha A Manoj for their exceptional blend of clinical expertise, compassionate care, and unwavering dedication to patient well-being. With over 38 years of combined experience, they offer advanced surgical and medical solutions tailored to individual needs. Dr. Manoj is renowned for his precision in laparoscopic and general surgery, while Dr. Anitha is trusted for her personalized approach to women’s health and fertility care. Together, they provide holistic, ethical, and patient-centered treatment—ensuring comfort, clarity, and confidence at every step of the healthcare journey. Their reputation is built on trust, results, and genuine care.
        </p>
        <button
          className="appointment-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={handleAppointmentClick}
        >
          Appointment
        </button>
      </div>
      <div className="home-banner-image" data-aos="fade-left" data-aos-delay="500">
        <img src={aboutLogo} alt="Welcome" className="home-logo-shadow" />
      </div>
    </section>
  );
};

export default HomeWelcomeBanner;
