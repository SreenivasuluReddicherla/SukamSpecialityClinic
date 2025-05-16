import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import founder1 from '../assets/manoj.avif';
import founder2 from '../assets/Anitha.webp';
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import logo from "../assets/logo1.png";

const AboutUs = () => {
  const [modal, setModal] = useState('');
  const modalRef = useRef(null);

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

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-text">
          <h1>Exceptional Care for <span>Everyone</span></h1>
          <p>
          Established 8 years ago, Sukam Specialty and Fertility Clinic has been a trusted name in providing comprehensive, compassionate, and expert healthcare in General Surgery, Obstetrics &Gynecology, and Infertility. Founded with a vision to bring together clinical excellence and personalized care, our clinic is led by a dedicated team of experienced specialists who bring deep knowledge, skill, and understanding to every patient interaction. Over the years, we’ve had the privilege of walking alongside countless individuals and families on their journey to healing, motherhood, and better health.
          Whether it's a complex surgical need, women's health concern, or challenges related to fertility, our approach remains the same: to listen, to care, and to treat with precision and empathy.
At Sukam,  we don’t just treat conditions — we care for people.

          </p>
          <button className="appointment-btn" data-aos="zoom-in" data-aos-delay="300">
            Appointment
          </button>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="500">
          <img src={logo} alt="Logo" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services" data-aos="fade-up">
        <div className="service-box green" data-aos="zoom-in-up">
          <div className="image-holder">
            <img src={about1} alt="Clinic" className="service-img" />
          </div>
          <h4><b>Comprehensive Services</b></h4>
          <p>Unextend care, hospital & primary and care.</p>
        </div>

        <div className="service-box orange" data-aos="zoom-in-up" data-aos-delay="100">
          <div className="image-holder">
            <img src={about2} alt="Clinic" className="service-img" />
          </div>
          <h4><b>Experienced Specialists</b></h4>
          <p>Dedicated to providing comprehensive care.</p>
        </div>

        <div className="service-box blue" data-aos="zoom-in-up" data-aos-delay="200">
          <div className="image-holder">
            <img src={about3} alt="Clinic" className="service-img" />
          </div>
          <h4><b>Patient-Centered Approach</b></h4>
          <p>Ensures our patients are at the center of care.</p>
        </div>
      </section>

      <section className="founders-section" data-aos="fade-up">
  <h2 className="founders-title">Founders & Directors</h2>
  <div className="founders-intro" data-aos="fade-right">
    <h5 className="founders-vision">The Heart. The Hands. The Vision.</h5>
  </div>

  {/* Founder 1: Image Left */}
  <div className="founder-profile" data-aos="fade-right">
    <img src={founder1} alt="Dr. Manoj Karthik S" className="founder-img" />
    <div className="founder-text">
      <h3>Dr. Manoj Karthik S</h3>
      <p className="founder-subtitle">
        MS (General Surgery) | FMAS | PGDHE | Senior General and Laparoscopic Surgeon | 22+ Years of Experience
      </p>
      <p>
        A veteran surgeon with a calm mind and steady hands, Dr. Manoj Karthik S has spent over two decades in the operating room, managing everything from complex thyroid cases to laparoscopic hernia repairs.
        His reputation is built not just on skill, but on sound judgment — knowing when to operate, and when not to.
      </p>
      <em>"Patients don't come to us for stitches and scars. They come to us for solutions..."</em>
    </div>
  </div>

  {/* Founder 2: Image Right */}
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
      {/* Core Values & Vision */}
      <section className="core-values-vision-container">
        {/* Core Values */}
        <div className="core-values" data-aos="zoom-in">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="core-values-grid">
            <div className="core-value-card">🌿 <b>Compassionate Care:</b> We treat every patient with empathy, dignity, and respect — understanding that behind every case is a unique story and a human heart.</div>
            <div className="core-value-card">🔍 <b>Clinical Excellence:</b> We are committed to the highest standards of medical expertise, continuous learning, and the use of modern technology to deliver safe, effective care.</div>
            <div className="core-value-card">🤝 <b>Integrity & Trust:</b>We believe in transparency, honesty, and building lifelong relationships based on trust and ethical practice.</div>
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
