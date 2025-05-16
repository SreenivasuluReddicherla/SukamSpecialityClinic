import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';
import founder1 from '../assets/doctor-manoj.jpg';
import founder2 from '../assets/anitha.jpg';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.webp';
import aboutLogo from '../assets/aboutLogo.png';
import { Link } from 'react-router-dom';
import ServicesPage from "./ServicesPage"; // ✅ Correct


const AboutUs = () => {
  const [modal, setModal] = useState('');
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (modal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [modal]);

  const openModal = (name) => setModal(name);
  const closeModal = () => setModal('');

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };

  return (
    <div className="homepage">
          <section className="home-banner-section" data-aos="fade-up">
      <div className="home-banner-text">
        <h1>
          Sukam Speciality and Fertility Clinic
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

      {/* Founders Section */}
      <section className="founders-section" data-aos="fade-up">
        <h2 className="founders-title">Founders & Directors</h2>
        <div className="founders-intro" data-aos="fade-right">
                  <h5 className="founders-vision">The Heart. The Hands. The Vision.</h5>
        </div>

        {/* Founder 1: Image Left */}
        <div className="founder-profiles" data-aos="fade-right">
          <img src={founder1} alt="Dr. Manoj Karthik S" className="founder-img" />
          <div className="founder-text">
            <h3>Dr. Manoj Karthik S</h3>
            <p className="founder-subtitle">
              MBBS | MS (Gen Surg) | FMAS | PGDHE | Senior General, Laparoscopic and Endoscopic Surgeon | 22+ Years of Experience Dr Manoj Karthik S 


            </p>
            <p>
            We believe health is a right, not a privilege. Our mission is to provide accessible, compassionate, and quality care for every individual—regardless of age, background, or condition. With a focus on prevention, healing, and well-being, we are committed to building a healthier community, one person at a time.
 
            </p>
            <em>"Patients don't come to us for stitches and scars. They come to us for solutions..."</em>
          </div>
        </div>

        {/* Founder 2: Image Right */}
        <div className="founder-profiles reverse" data-aos="fade-left">
          <img src={founder2} alt="Dr. Anitha A Manoj" className="founder-img" />
          <div className="founder-text">
            <h3>Dr. Anitha A Manoj</h3>
            <p className="founder-subtitle">
            MBBS | MS (OBG) | FMAS | FRM | Senior Consultant Obstetrician & Gynecologist | Fertility Specialist | 16+ Years of Experience
            </p>
            <p>
            Women’s health is the foundation of a healthy society. We are dedicated to supporting women at every stage of life—with care that is compassionate, informed, and empowering. From adolescence to motherhood and beyond, our focus is on listening, understanding, and providing the best in personalized, holistic healthcare for every woman.
            </p>
            <em>“Whether it’s bringing a new life into this world or helping a woman understand her own body — I treat every case as personal. Because it is.”</em>
          </div>
        </div>
      </section>
{/* Services Section */}
<section className="services" data-aos="fade-up"> 
      <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
  <div className="service-box green" data-aos="zoom-in-up">
    <div className="image-holder">
      <img src={about1} alt="Clinic" className="service-img" />
    </div>
    <h4><b>Comprehensive Services</b></h4>
    <p>Unextend care, hospital & primary and care.</p>
  </div>
</Link> 

        <Link to="/appointment" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="service-box orange" data-aos="zoom-in-up" data-aos-delay="100">
    <div className="image-holder">
      <img src={about2} alt="Clinic" className="service-img" />
    </div>
    <h4><b>Experienced Specialists</b></h4>
    <p>Dedicated to providing comprehensive care.</p>
  </div>
</Link>

<Link to="/CoreValues" style={{ textDecoration: "none", color: "inherit" }}>
  <div className="service-box green" data-aos="zoom-in-up">
    <div className="image-holder">
      <img src={about1} alt="Clinic" className="service-img" />
    </div>
    <h4><b>Patient Centric Approach</b></h4>
    <p>Unextend care, hospital & primary and care.</p>
  </div>
</Link> 
      </section>
      {/* Core Values & Vision */}
      <section className="core-values-vision-container">
        {/* Core Values */}
        <div className="core-values" data-aos="zoom-in">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="core-values-grid">
            <div className="core-value-card">🌿 <b>Compassionate Care:</b> We treat every patient with empathy, dignity, and respect — understanding that behind every case is a unique story and a human heart.</div>
            <div className="core-value-card">🔍 <b>Clinical Excellence:</b> We are committed to the highest standards of medical expertise, continuous learning, and the use of modern technology to deliver safe, effective care.</div>
            <div className="core-value-card">🤝 <b>Integrity & Trust:</b> We believe in transparency, honesty, and building lifelong relationships based on trust and ethical practice.</div>
            <div className="core-value-card">🧬 <b>Personalized Approach:</b> Every patient is different. We tailor our care plans to individual needs, ensuring comfort, clarity, and confidence in every step of the journey.</div>
            <div className="core-value-card">🌱 <b>Empowerment Through Education:</b> We educate and inform patients, enabling them to make confident decisions about their health and wellness.</div>
            <div className="core-value-card">💖 <b>Trust-Centered Relationships:</b> We build meaningful bonds with our valuable time in our clinic.</div>
          </div>
        </div>

        {/* Vision */}
        <div className="vision" data-aos="fade-left">
          <h2 className="section-heading">Our Vision</h2>
          <p>
            To be a leading center of excellence in General Surgery, Obstetrics & Gynecology, and Infertility care, offering compassionate, evidence-based, and patient-centered solutions that empower lives and build healthier futures.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
