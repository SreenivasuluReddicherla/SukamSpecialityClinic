import React from "react";
import "./Locations.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCalendarCheck,
  FaEnvelope,
  FaArrowRight,
  FaHospital,
  FaUserMd,
  FaQuestionCircle,
  FaClinicMedical,
} from "react-icons/fa";

const treatments = [
  "Obstetrics Care",
  "Gynecology",
  "Infertility Treatments",
  "Laparoscopic Surgery",
  "Pregnancy Care",
  "Menstrual Disorder Management",
  "PCOS / PCOD Treatment",
  "High-Risk Pregnancy Care",
  "General Women’s Health",
  "Advanced Fertility Consultation",
  "Endoscopy",
  "Postnatal Care",
];

const experts = [
  {
    name: "Dr. Manoj Karthik S",
    role: "Laparoscopic Surgeon and Endoscopist",
    desc: "Experienced specialist providing advanced surgical care with a patient-focused approach.",
    image:
      "https://via.placeholder.com/400x450?text=Dr.+Manoj+Karthik+S",
  },
  {
    name: "Dr. Anitha A. Manoj",
    role: "Gynecologist and Fertility Expert",
    desc: "Renowned expert in gynecology and fertility care with a strong focus on compassionate treatment.",
    image:
      "https://via.placeholder.com/400x450?text=Dr.+Anitha+A.+Manoj",
  },
];

const faqs = [
  {
    question: "Where is Sukam Speciality Clinic located in Katriguppe / AGS Layout / Ittamadu?",
    answer:
      "Sukam Maternity and Speciality Clinic is located near Kattiriguppe Water Tank Circle, opposite SBI, BSK 3rd Stage, Bengaluru.",
  },
  {
    question: "What treatments are available at this location?",
    answer:
      "This location offers gynecology, obstetrics, infertility care, laparoscopic procedures, pregnancy care, and other women’s healthcare services.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by phone, WhatsApp, or through the appointment button on the page.",
  },
  {
    question: "Is Google Maps navigation available?",
    answer:
      "Yes, the location section includes a Google Maps iframe and can be connected with a direct navigation link.",
  },
];

const LocationPage = () => {
  return (
    <div className="sukam-location-page">
      {/* Section 1 - Hero */}
      <section className="slp-hero">
        <div className="slp-hero-overlay">
          <div className="slp-container slp-hero-content">
            <span className="slp-badge">Dedicated Location Page</span>
            <h1>
              Welcome to Sukam Speciality Clinic in Katriguppe / AGS Layout /
              Ittamadu
            </h1>
            <p>
              Sukam Speciality and Fertility Clinic is a leading healthcare
              centre dedicated to surgical, obstetrics, gynaecological, and
              advanced infertility treatments with specialized care. Equipped
              with state-of-the-art infrastructure and advanced technology,
              Sukam provides compassionate and effective solutions for
              individuals and couples seeking expert medical support.
            </p>

            <div className="slp-hero-actions">
              <a href="#appointment" className="slp-btn slp-btn-primary">
                Book Appointment
              </a>
              <a
                href="https://wa.me/919108108980"
                target="_blank"
                rel="noreferrer"
                className="slp-btn slp-btn-secondary"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Treatments */}
      <section className="slp-section slp-treatments">
        <div className="slp-container">
          <div className="slp-section-head">
            <span className="slp-mini-title">
              <FaClinicMedical /> Treatment Options
            </span>
            <h2>
              Treatment options available at Sukam Speciality Clinic in
              Katriguppe / AGS Layout / Ittamadu
            </h2>
            <p>
              Display all available services here in a professional card/grid
              layout similar to the design reference.
            </p>
          </div>

          <div className="slp-treatment-grid">
            {treatments.map((item, index) => (
              <div className="slp-treatment-card" key={index}>
                <div className="slp-treatment-icon">
                  <FaArrowRight />
                </div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - About + Map */}
      <section className="slp-section slp-about-map">
        <div className="slp-container slp-about-map-grid">
          <div className="slp-about-content">
            <span className="slp-mini-title">
              <FaHospital /> About This Location
            </span>
            <h2>
              Sukam Speciality Clinic – Best Speciality / Multispecialty Clinic
              in Katriguppe / AGS Layout / Ittamadu
            </h2>
            <p>
              Sukam Speciality and Fertility Clinic is a leading healthcare
              centre dedicated to surgical, obstetrics, gynaecological, and
              advanced infertility treatments and specialized care. Equipped
              with state-of-the-art infrastructure and cutting-edge technology,
              Sukam aims to provide comprehensive solutions for individuals and
              couples seeking medical help.
            </p>
            <p>
              Founded by a team of experienced medical professionals and
              healthcare specialists, the clinic is led by Dr. Manoj Karthik S,
              an experienced Laparoscopic Surgeon and Endoscopist, and
              Dr. Anitha A. Manoj, a renowned Gynecologist and Fertility expert.
            </p>
            <p>
              Sukam Speciality and Fertility Clinic is recognized for its high
              success rates, patient-centric approach, and commitment to
              delivering compassionate and effective treatments.
            </p>

            <div className="slp-contact-boxes">
              <div className="slp-contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Address</h4>
                  <p>
                    50 Feet Road, Kattiriguppe Water Tank Circle, BSK 3rd Stage,
                    3rd Phase, opposite SBI, Bengaluru, Karnataka 560085
                  </p>
                </div>
              </div>

              <div className="slp-contact-item">
                <FaPhoneAlt />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9108108980 / +91 8108108310 / +91 9449628823</p>
                </div>
              </div>

              <div className="slp-contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p>sukamspecialityclinic@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slp-map-card">
            <h3>
              <FaMapMarkerAlt /> GPS Direction Reference
            </h3>
            <iframe
              title="Sukam Maternity & Speciality Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.261270702708!2d77.545740922999!3d12.93105856279173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2308a30fcd%3A0x51e0547b450bb1b!2sSukam%20Maternity%20%26%20Speciality%20Clinic!5e0!3m2!1sen!2sin!4v1766851318910!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="slp-btn slp-btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Section 4 - Experts */}
      <section className="slp-section slp-experts">
        <div className="slp-container">
          <div className="slp-section-head">
            <span className="slp-mini-title">
              <FaUserMd /> Our Experts
            </span>
            <h2>
              Sukam Experts available at Katriguppe / AGS Layout / Ittamadu
            </h2>
            <p>
              Expert-led care with trusted specialists in gynecology,
              infertility, and advanced surgical support.
            </p>
          </div>

          <div className="slp-expert-grid">
            {experts.map((expert, index) => (
              <div className="slp-expert-card" key={index}>
                <div className="slp-expert-image-wrap">
                  <img src={expert.image} alt={expert.name} />
                </div>
                <div className="slp-expert-content">
                  <h3>{expert.name}</h3>
                  <h4>{expert.role}</h4>
                  <p>{expert.desc}</p>
                  <a href="#appointment" className="slp-link-btn">
                    Consult Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="slp-section slp-cta" id="appointment">
        <div className="slp-container slp-cta-box">
          <div className="slp-cta-text">
            <h2>
              You don’t have to navigate this alone. We’re here with expert
              advice and compassionate care.
            </h2>
            <p>
              Connect with our care team today for trusted support, clear
              guidance, and personalized treatment.
            </p>
          </div>

          <div className="slp-cta-actions">
            <a href="/appointment" className="slp-btn slp-btn-primary">
              <FaCalendarCheck /> Book an Appointment
            </a>
            <a
              href="https://wa.me/919108108980"
              target="_blank"
              rel="noreferrer"
              className="slp-btn slp-btn-whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 6 - FAQs */}
      <section className="slp-section slp-faqs">
        <div className="slp-container">
          <div className="slp-section-head">
            <span className="slp-mini-title">
              <FaQuestionCircle /> FAQs
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="slp-faq-list">
            {faqs.map((faq, index) => (
              <details className="slp-faq-item" key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Gallery */}
      <section className="slp-section slp-gallery">
        <div className="slp-container">
          <div className="slp-section-head">
            <span className="slp-mini-title">
              <FaMapMarkerAlt /> Explore Our Clinic
            </span>
            <h2>Explore Our Clinic</h2>
            <p>Location pictures can be added here after approval.</p>
          </div>

          <div className="slp-gallery-grid">
            <div className="slp-gallery-card">
              <img
                src="https://via.placeholder.com/500x350?text=Clinic+Location+1"
                alt="Clinic Location 1"
              />
            </div>
            <div className="slp-gallery-card">
              <img
                src="https://via.placeholder.com/500x350?text=Clinic+Location+2"
                alt="Clinic Location 2"
              />
            </div>
            <div className="slp-gallery-card">
              <img
                src="https://via.placeholder.com/500x350?text=Clinic+Location+3"
                alt="Clinic Location 3"
              />
            </div>
            <div className="slp-gallery-card">
              <img
                src="https://via.placeholder.com/500x350?text=Clinic+Location+4"
                alt="Clinic Location 4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;