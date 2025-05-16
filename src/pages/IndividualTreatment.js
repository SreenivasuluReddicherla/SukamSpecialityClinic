import React from 'react';
import './IndividualTreatment.css'; // You can style it separately
import herniaImg from '../assets/home_card.jpg';

const IndividualTreatment = () => {
    return (
        <div className="hernia-page">
                <div
        className="hernia-hero"
        style={{ backgroundImage: `url(${herniaImg})` }}
      >
            <div className="hernia-hero-text">
              <h1>Hernia Treatment</h1>
              <p>Advanced laparoscopic procedure for effective and minimally invasive hernia repair.</p>
            </div>
          </div>
    
          <section className="hernia-description">
            <h2>What is a Hernia?</h2>
            <p>A hernia occurs when an internal organ or other body part protrudes through the muscle or tissue wall that normally contains it.</p>
    
            <h2>Types of Hernias We Treat</h2>
            <ul>
              <li>Inguinal Hernia</li>
              <li>Umbilical Hernia</li>
              <li>Incisional Hernia</li>
              <li>Femoral Hernia</li>
              <li>Hiatal Hernia</li>
            </ul>
    
            <h2>Our Treatment Approach</h2>
            <p>
              We specialize in laparoscopic hernia repair, which offers faster recovery, less pain, smaller scars, and quicker return to daily activities.
            </p>
          </section>
        </div>
      );
    };

export default IndividualTreatment;
