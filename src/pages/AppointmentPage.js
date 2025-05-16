import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppointmentPage.css";
import manoj from "../assets/profile2.png";
import anitha from "../assets/profile1.png";

const doctors = [
  {
    id: "dr-manoj-karthik",
    name: "Dr. Manoj Karthik S",
    qualification: "MBBS, MS (Gen Surg), FMAS, PGDHE)",
    designation: "Senior General , Laparoscopic and Endoscopic Surgeon",
    image: manoj,
    bookLink:
      "https://www.eka.care/doctor/dr-manoj-karthik-general-surgeon-bengaluru/calendar?cid=674933ac16f48e001dd639b6&utm_source=%2Fclinic%2F%5Bclinicslug%5D&utm_medium=eka-web&utm_campaign=web-navigation",
  },
  {
    id: "dr-anitha-a-manoj",
    name: "Dr. Anitha A Manoj",
    qualification: "MBBS, MS (OBG), FMAS & FRM",
    designation: "Senior Consultant Obstetrician, Gynaecologist and Fertility Specialist",
    image: anitha,
    bookLink:
      "https://www.eka.care/doctor/dr-anitha-a-manoj-obstetrics-and-gynecologist-bengaluru/calendar?cid=674933ac16f48e001dd639b6&utm_source=%2Fclinic%2F%5Bclinicslug%5D&utm_medium=eka-web&utm_campaign=web-navigation",
  },
];

const AppointmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="appointment-page">
      {/* Go Back Button */}
      <button className="go-back" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2 className="appointment-title">Book Your Appointment</h2>

      <div className="doctor-cards">
        {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className={`doctor-card ${doctor.id}`} // Dynamic class
              onClick={() => navigate(`/doctor-profile/${doctor.id}`)}
              style={{ cursor: "pointer" }}
            >
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p>{doctor.qualification}</p>
            <p>{doctor.designation}</p>

            {/* Buttons */}
            <div className="button-group">
              <Link 
                to={`/doctor-profile/${doctor.id}`} 
                className="profile-btn" 
                onClick={(e) => e.stopPropagation()} // Prevents card click event
              >
                See Profile
              </Link>

              <a 
                href={doctor.bookLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="book-btn"
                onClick={(e) => e.stopPropagation()} 
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
