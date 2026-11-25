
import React, { useState } from "react";
import "./Contact.css";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
  FaPaperPlane,
  FaArrowRight,
  FaBaby,
  FaBabyCarriage,
  FaNotesMedical,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* =========================================================
   SUKAM CLINIC - CONTACT INFORMATION
========================================================= */

const CLINIC_DETAILS = {
  name: "Sukam Clinic",

  phone: "+91 81081 08310",
  phoneLink: "+918108108310",

  secondaryPhone: "+91 91081 08980",
  secondaryPhoneLink: "+919108108980",

  landline: "080 2673 1314",
  landlineLink: "08026731314",

  whatsapp: "919108108980",

  email: "sukamspecialityclinic@gmail.com",

  address:
    "50 Feet Road, Katriguppe Water Tank Circle, BSK 3rd Stage, 3rd Phase, Opposite SBI, Bengaluru, Karnataka 560085",

  shortAddress: "Katriguppe, Bengaluru",

  mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.261270702708!2d77.545740922999!3d12.93105856279173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2308a30fcd%3A0x51e0547b450bb1b!2sSukam%20Maternity%20%26%20Speciality%20Clinic!5e0!3m2!1sen!2sin!4v1766851318910!5m2!1sen!2sin"
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(
    `${CLINIC_DETAILS.name}, ${CLINIC_DETAILS.address}`
  );

/* =========================================================
   CONTACT COMPONENT
========================================================= */

const Contact = () => {
  /* -------------------------------------------------------
     Contact Form State
  ------------------------------------------------------- */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  /* -------------------------------------------------------
     Handle Form Input Changes
  ------------------------------------------------------- */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setFormStatus({
      type: "",
      message: "",
    });
  };

  /* -------------------------------------------------------
     Handle Contact Form Submission Through WhatsApp
  ------------------------------------------------------- */

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone, email, message } = formData;

    const cleanPhone = phone.replace(/[\s()-]/g, "");

    const phonePattern = /^(?:\+91|91)?[6-9]\d{9}$/;

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setFormStatus({
        type: "error",
        message: "Please fill in all the required fields.",
      });

      return;
    }

    if (!phonePattern.test(cleanPhone)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid Indian mobile number.",
      });

      return;
    }

    const whatsappMessage = [
      "Hello Sukam Clinic,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim() || "Not provided"}`,
      "",
      `Message: ${message.trim()}`,
      "",
      "Thank you.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${CLINIC_DETAILS.whatsapp}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setFormStatus({
      type: "success",
      message:
        "Your enquiry is ready. Please press Send in WhatsApp to complete it.",
    });
  };

  /* -------------------------------------------------------
     Specialities Information
  ------------------------------------------------------- */

  const specialities = [
    {
      id: 1,
      title: "Maternity",
      icon: FaBabyCarriage,
      className: "maternity",
    },
    {
      id: 2,
      title: "Fertility",
      icon: FaBaby,
      className: "fertility",
    },
    {
      id: 3,
      title: "General Surgery",
      icon: FaNotesMedical,
      className: "surgery",
    },
  ];

  return (
    <main className="sukam-contact-page">

      {/* =================================================
          SECTION 1 - CONTACT HERO BANNER
      ================================================= */}

      <section
        className="sc-hero-section"
        aria-labelledby="sc-contact-title"
      >
        {/* Hero Background Photograph */}

        <div
          className="sc-hero-image"
          aria-hidden="true"
        />

        {/* Soft Background Overlay */}

        <div
          className="sc-hero-overlay"
          aria-hidden="true"
        />

        {/* Hero Content */}

        <div className="sc-hero-container">
          <div className="sc-hero-content">

            {/* <h1 id="sc-contact-title">
              Contact Us
            </h1> */}

            <div className="sc-hero-subtitle">
              <span>We are here</span>

              <span className="sc-script-text">
                for you...
              </span>
            </div>

            <div className="sc-hero-accent" />

            <p>
              Your health and happiness are our priority.
              <br />
              Reach out to us anytime.
            </p>

          </div>
        </div>

        {/* Decorative Hero Waves */}

        <svg
          className="sc-hero-side-wave"
          viewBox="0 0 350 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M350 0 C210 40 90 150 0 300 L350 300 Z"
            fill="#f6a9cf"
            opacity="0.60"
          />

          <path
            d="M350 65 C220 100 130 210 35 300 L350 300 Z"
            fill="#fbd6e8"
            opacity="0.85"
          />
        </svg>

        <svg
          className="sc-hero-bottom-wave"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 22 C280 105 470 0 740 45 C1040 100 1200 0 1440 28 L1440 90 L0 90 Z"
            fill="#f7c4dd"
          />

          <path
            d="M0 42 C300 95 480 20 740 56 C1050 95 1230 8 1440 42 L1440 90 L0 90 Z"
            fill="#fffafd"
          />
        </svg>

      </section>

      {/* =================================================
          SECTION 2 - QUICK CONTACT CARDS
      ================================================= */}

      <section
        className="sc-quick-contact"
        aria-label="Quick contact options"
      >
        {/* Call Us */}

        <a
          href={`tel:${CLINIC_DETAILS.phoneLink}`}
          className="sc-quick-card sc-call-card"
        >
          <div className="sc-contact-icon sc-phone-icon">
            <FaPhoneAlt />
          </div>

          <div className="sc-quick-card-content">
            <h2>Call Us</h2>

            <p className="sc-primary-number">
              {CLINIC_DETAILS.phone}
            </p>
          </div>
        </a>

        {/* WhatsApp Us */}

        <a
          href={`https://wa.me/${CLINIC_DETAILS.whatsapp}`}
          className="sc-quick-card sc-whatsapp-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sc-contact-icon sc-whatsapp-icon">
            <FaWhatsapp />
          </div>

          <div className="sc-quick-card-content">
            <h2>WhatsApp Us</h2>

            <p>Chat with us</p>
          </div>
        </a>

        {/* Visit Us */}

        <a
          href={DIRECTIONS_URL}
          className="sc-quick-card sc-location-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sc-contact-icon sc-location-icon">
            <FaMapMarkerAlt />
          </div>

          <div className="sc-quick-card-content">
            <h2>Visit Us</h2>

            <p>Sukam Clinic,</p>

            <p>{CLINIC_DETAILS.shortAddress}</p>
          </div>
        </a>

        {/* Email Us */}

        <a
          href={`mailto:${CLINIC_DETAILS.email}`}
          className="sc-quick-card sc-email-card"
        >
          <div className="sc-contact-icon sc-email-icon">
            <FaEnvelope />
          </div>

          <div className="sc-quick-card-content">
            <h2>Email Us</h2>

            <p className="sc-email-address">
              {CLINIC_DETAILS.email}
            </p>
          </div>
        </a>

      </section>

      {/* =================================================
          SECTION 3 - MAIN CONTACT INFORMATION
      ================================================= */}

      <section
        className="sc-main-contact"
        aria-label="Clinic information and enquiries"
      >
        {/* ------------------------------------------------
            LEFT COLUMN - CLINIC TIMINGS
        ------------------------------------------------ */}

        <div className="sc-timing-card">

          <div className="sc-timing-heading">
            <FaClock className="sc-clock-icon" />

            <h2>Clinic Timings</h2>
          </div>

          <div className="sc-timing-block">
            <h3>Monday – Saturday</h3>

            <p>8:00 AM – 9:00 PM</p>
          </div>

          <div className="sc-timing-divider" />

          <div className="sc-timing-block">
            <h3>Sunday</h3>

            <p>On Appointment Basis Only</p>
          </div>

          <div className="sc-timing-decoration">
            <span />

            <FaCalendarAlt />
          </div>

        </div>

        {/* ------------------------------------------------
            CENTER COLUMN - GOOGLE MAPS
        ------------------------------------------------ */}

        <div className="sc-map-section">

          <div className="sc-map-wrapper">

            <iframe
              title="Sukam Maternity and Speciality Clinic Location"
              src={CLINIC_DETAILS.mapUrl}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          <a
            href={DIRECTIONS_URL}
            className="sc-directions-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />

            <span>Get Directions</span>

            <FaArrowRight className="sc-direction-arrow" />
          </a>

        </div>

        {/* ------------------------------------------------
            RIGHT COLUMN - CONTACT FORM
        ------------------------------------------------ */}

        <div className="sc-message-card">

          {/* Decorative Background */}

          <div
            className="sc-form-decoration"
            aria-hidden="true"
          />

          <div
            className="sc-form-bottom-wave"
            aria-hidden="true"
          />

          {/* Form Heading */}

          <div className="sc-message-heading">
            <h2>Send Us a Message</h2>

            <p>
              We'll get back to you at the earliest.
            </p>
          </div>

          {/* Contact Form */}

          <form
            className="sc-contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name and Phone */}

            <div className="sc-form-row">

              <div className="sc-form-group">

                <label
                  htmlFor="sc-name"
                  className="sc-visually-hidden"
                >
                  Your Name
                </label>

                <input
                  id="sc-name"
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                />

              </div>

              <div className="sc-form-group">

                <label
                  htmlFor="sc-phone"
                  className="sc-visually-hidden"
                >
                  Your Phone
                </label>

                <input
                  id="sc-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  maxLength={18}
                  required
                />

              </div>

            </div>

            {/* Email Address */}

            <div className="sc-form-group">

              <label
                htmlFor="sc-email"
                className="sc-visually-hidden"
              >
                Email Address
              </label>

              <input
                id="sc-email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={150}
              />

            </div>

            {/* Message */}

            <div className="sc-form-group">

              <label
                htmlFor="sc-message"
                className="sc-visually-hidden"
              >
                Your Message
              </label>

              <textarea
                id="sc-message"
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                maxLength={1000}
                required
              />

            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="sc-send-button"
            >
              <FaPaperPlane />

              <span>Send Message</span>
            </button>

            <p className="sc-form-notice">
              Opens WhatsApp to complete your enquiry.
              Please avoid sharing confidential medical information.
            </p>

            {/* Form Status Message */}

            {formStatus.message && (
              <div
                className={`sc-form-status sc-status-${formStatus.type}`}
                role={
                  formStatus.type === "error"
                    ? "alert"
                    : "status"
                }
              >
                {formStatus.message}
              </div>
            )}

          </form>

        </div>

      </section>

      {/* =================================================
          SECTION 4 - OUR SPECIALITIES
      ================================================= */}

      <section
        className="sc-specialities-section"
        aria-labelledby="sc-specialities-title"
      >

        {/* Decorative Flower Background */}

        <div
          className="sc-flower-decoration"
          aria-hidden="true"
        />

        {/* Specialities Heading */}

        <div className="sc-specialities-heading">

          <span className="sc-heading-line" />

          <h2 id="sc-specialities-title">
            Our Specialities
          </h2>

          <span className="sc-heading-line" />

        </div>

        <div className="sc-specialities-container">

          {/* Speciality Items */}

          <div className="sc-specialities-list">

            {specialities.map((speciality) => {
              const Icon = speciality.icon;

              return (
                <div
                  key={speciality.id}
                  className={`sc-speciality-item sc-speciality-${speciality.className}`}
                >

                  <div className="sc-speciality-icon">

                    <Icon aria-hidden="true" />

                  </div>

                  <h3>{speciality.title}</h3>

                </div>
              );
            })}

          </div>

          {/* Clinic Commitment */}

          <div className="sc-commitment">

            <p>Your Health.</p>

            <p>Our Commitment.</p>

            <span className="sc-commitment-underline" />

          </div>

        </div>

        {/* Bottom Decorative Waves */}

        <svg
          className="sc-specialities-wave"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 55 C240 30 350 190 650 155 C950 120 1190 -35 1440 45 L1440 200 L0 200 Z"
            fill="#f9d8e9"
            opacity="0.75"
          />

          <path
            d="M0 90 C280 30 420 200 740 170 C1060 140 1260 10 1440 75 L1440 200 L0 200 Z"
            fill="#f4e4fa"
            opacity="0.70"
          />

          <path
            d="M0 135 C280 85 440 205 760 185 C1100 155 1270 70 1440 110 L1440 200 L0 200 Z"
            fill="#fce5ef"
          />
        </svg>

      </section>

      {/* =================================================
          SECTION 5 - ADDITIONAL CONTACT INFORMATION
      ================================================= */}

      <section
        className="sc-additional-contact"
        aria-label="Additional clinic contact details"
      >

        <div className="sc-address-details">

          <FaMapMarkerAlt />

          <p>{CLINIC_DETAILS.address}</p>

        </div>

        <div className="sc-additional-numbers">

          <a href={`tel:${CLINIC_DETAILS.secondaryPhoneLink}`}>
            <FaPhoneAlt />

            {CLINIC_DETAILS.secondaryPhone}
          </a>

          <span className="sc-contact-separator" />

          <a href={`tel:${CLINIC_DETAILS.landlineLink}`}>
            <FaPhoneAlt />

            {CLINIC_DETAILS.landline}
          </a>

          <span className="sc-contact-separator" />

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />

            View Location
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;
