import React from 'react';
import './CoreValues.css'; 

const CoreValues = () => {
  return (
    <section className="core-values-vision-container">
      {/* Core Values Section */}
      <div className="core-values" data-aos="zoom-in">
        <h2 className="section-heading">Our Core Values</h2>
        <div className="core-values-grid">
          <div className="core-value-card">
            🌿 <b>Compassionate Care:</b> We treat every patient with empathy, dignity, and respect — understanding that behind every case is a unique story and a human heart.
          </div>
          <div className="core-value-card">
            🔍 <b>Clinical Excellence:</b> We are committed to the highest standards of medical expertise, continuous learning, and the use of modern technology to deliver safe, effective care.
          </div>
          <div className="core-value-card">
            🤝 <b>Integrity & Trust:</b> We believe in transparency, honesty, and building lifelong relationships based on trust and ethical practice.
          </div>
          <div className="core-value-card">
            🧬 <b>Personalized Approach:</b> Every patient is different. We tailor our care plans to individual needs, ensuring comfort, clarity, and confidence in every step of the journey.
          </div>
          <div className="core-value-card">
            🌱 <b>Empowerment Through Education:</b> We educate and inform patients, enabling them to make confident decisions about their health and wellness.
          </div>
          <div className="core-value-card">
            💖 <b>Trust-Centered Relationships:</b> We build meaningful bonds with our valuable time in our clinic.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
