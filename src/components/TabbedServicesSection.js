import React from "react";
import { useNavigate } from "react-router-dom";
import "./TabbedServicesSection.css";
import img1 from "../assets/service2.jpg";
import img2 from "../assets/service1.jpg";
import img3 from "../assets/service3.jpg";

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "General Surgery",
      description: "Advanced surgical procedures, <br> by specialists with modern equipment.",
      image: img2,
      doctorId: "dr-manoj-karthik",
      link: "/services/surgery",
      titleClass: "general-surgery",
    },
    {
      title: "Obstetrics & Gynaecology",
      description: "Holistic care for women, <br> from adolescence to maternity and beyond.",
      image: img1,
      doctorId: "dr-anitha-a-manoj",
      link: "/services/pregnancy",
      titleClass: "obstetrics-gynaecology",
    },
    {
      title: "Reproductive Medicine",
      description: "Compassionate, science-backed fertility care <br> tailored to your journey.",
      image: img3,
      doctorId: "dr-anitha-a-manoj",
      link: "/services/gynecology",
      titleClass: "reproductive-medicine",
    },
  ];

  return (
    <div className="showcase-section">
      <h2 className="modern-section-title">Sukam Services</h2>
      <div className="showcase-grid">
        {services.map((service, index) => (
          <div key={index} className="showcase-card">
            <div className="card-front">
              <div className="card-img-wrapper">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-body">
                <h3 className={`service-title ${service.titleClass}`}>{service.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                <div className="modern-buttons">
                  <button
                    className="modern-btn primary"
                    onClick={() => navigate(service.link)}
                  >
                    Explore More
                  </button>
                  <button
                    className="modern-btn secondary"
                    onClick={() => navigate(`/doctor-profile/${service.doctorId}`)}
                  >
                    Find Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
