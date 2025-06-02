import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaPhoneAlt, FaHome, FaFileMedicalAlt, FaCalendarAlt } from "react-icons/fa";
import EmergencyModal from "./EmergencyModal";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeLinkClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      closeMenu();
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const handleScrollToTestimonials = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Navigate to home page
    navigate("/");

    // Scroll to testimonials after navigating to home
    setTimeout(() => {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay to ensure the page has loaded before scrolling
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
    setSubDropdownOpen(null);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    setSubDropdownOpen(null);
  };

  const toggleSubDropdown = (subDropdown) => {
    setSubDropdownOpen(subDropdownOpen === subDropdown ? null : subDropdown);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".navbar");
      if (navbar && !navbar.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </Link>

        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "❌" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={handleHomeLinkClick}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          <div className="dropdown">
            <div
              className="dropbtn"
              onClick={() => toggleDropdown("treatment")}
              aria-haspopup="true"
              aria-expanded={dropdownOpen === "treatment" ? "true" : "false"}
            >
              Specialties ▾
            </div>
            {dropdownOpen === "treatment" && (
              <div className="dropdown-content">
                <div className="dropdown-subsection">
                  <div
                    className="sub-btn"
                    onClick={() => toggleSubDropdown("generalSurgery")}
                    aria-haspopup="true"
                    aria-expanded={subDropdownOpen === "generalSurgery" ? "true" : "false"}
                  >
                    General Surgery
                  </div>
                  {subDropdownOpen === "generalSurgery" && (
                    <div className="sub-dropdown">
                      {[
                        "Hernia",
                        "Varicose Veins",
                        "Fatty Liver",
                        "Piles",
                        "Foot Ulcer Care",
                        "Gall stones",
                        "Neck swellings",
                        "Testicular swellings",
                      ].map((item) => (
                        <Link key={item} to="/services/surgery" onClick={closeMenu}>{item}</Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="dropdown-subsection">
                  <div
                    className="sub-btn"
                    onClick={() => toggleSubDropdown("obgyn")}
                    aria-haspopup="true"
                    aria-expanded={subDropdownOpen === "obgyn" ? "true" : "false"}
                  >
                    Obstetrics & Gynaecology
                  </div>
                  {subDropdownOpen === "obgyn" && (
                    <div className="sub-dropdown">
                      {[
                        "Pregnancy Care",
                        "Deliveries",
                        "Menstrual and Bleeding",
                        "Ectopic Pregnancies",
                        "Menopausal Care",
                        "Family Planning",
                        "Hysteroscopy",
                        "Laparoscopy",
                        "Uterine and Ovarian Surgeries",
                      ].map((item) => (
                        <Link key={item} to="/services/pregnancy" onClick={closeMenu}>{item}</Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="dropdown-subsection">
                  <div
                    className="sub-btn"
                    onClick={() => toggleSubDropdown("reproductive")}
                    aria-haspopup="true"
                    aria-expanded={subDropdownOpen === "reproductive" ? "true" : "false"}
                  >
                    Reproductive Medicine
                  </div>
                  {subDropdownOpen === "reproductive" && (
                    <div className="sub-dropdown">
                      {[
                        "PCOD",
                        "Infertility Issues",
                        "OITI",
                        "IUI",
                      ].map((item) => (
                        <Link key={item} to="/services/gynecology" onClick={closeMenu}>{item}</Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropbtn" onClick={() => toggleDropdown("resources")} aria-haspopup="true" aria-expanded={dropdownOpen === "resources" ? "true" : "false"}>
              Insights ▾
            </div>
            {dropdownOpen === "resources" && (
              <div className="dropdown-content">
                <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
                
                <Link to="#" onClick={handleScrollToTestimonials}>
                              Sukam Voices
                            </Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                <Link to="/faq" onClick={closeMenu}>FAQ</Link>
              </div>
            )}
          </div>

          <Link to="/Contact" onClick={closeMenu}>Contact</Link>
        </div>

        <div className="right-section">
          <button className="btns" onClick={() => navigate("/access-lab-reports")}>Access Lab Reports</button>
          <button className="btns" onClick={() => navigate("/appointment")}>Book an Appointment</button>
          <button className="btns" id="emergency" onClick={() => setShowEmergencyModal(true)}>
            <FaPhoneAlt className="text-white text-xl mr-1" /> Emergency
          </button>
        </div>
      </div>

      {showEmergencyModal && <EmergencyModal onClose={() => setShowEmergencyModal(false)} />}

      <div className="bottom-mobile-nav">
        <button onClick={() => navigate("/")}><FaHome />Home</button>
        <button onClick={() => navigate("/access-lab-reports")}><FaFileMedicalAlt />Lab Reports</button>
        <button onClick={() => navigate("/appointment")}><FaCalendarAlt />Book</button>
        <button id="emergency-bottom" onClick={() => setShowEmergencyModal(true)}><FaPhoneAlt />Emergency</button>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/logo.jpg";
// import { FaPhoneAlt, FaHome, FaFileMedicalAlt, FaCalendarAlt } from "react-icons/fa";
// import EmergencyModal from "./EmergencyModal";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showEmergencyModal, setShowEmergencyModal] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleHomeLinkClick = (e) => {
//     if (location.pathname === "/") {
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       setMenuOpen(false);
//     }
//   };

//   const handleLogoClick = (e) => {
//     e.preventDefault();
//     navigate("/");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const handleScrollToTestimonials = (e) => {
//     e.preventDefault();
//     navigate("/");
//     setTimeout(() => {
//       const testimonialsSection = document.getElementById("testimonials");
//       if (testimonialsSection) {
//         testimonialsSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 300);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const navbar = document.querySelector(".navbar");
//       if (navbar && !navbar.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="logo" onClick={handleLogoClick}>
//           <img src={logo} alt="Logo" />
//         </Link>

//         <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
//           {menuOpen ? "❌" : "☰"}
//         </button>

//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <Link to="/" onClick={handleHomeLinkClick}>Home</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

//           <div className="dropdown">
//             <div className="dropbtn">Specialties ▾</div>
//             <div className="dropdown-content">
//               <div className="dropdown-subsection">
//                 <div className="sub-btn">General Surgery</div>
//                 <div className="sub-dropdown">
//                   {["Hernia", "Varicose Veins", "Fatty Liver", "Piles", "Foot Ulcer Care", "Gall stones", "Neck swellings", "Testicular swellings"]
//                     .map((item) => (
//                       <Link key={item} to="/services/surgery" onClick={() => setMenuOpen(false)}>{item}</Link>
//                     ))}
//                 </div>
//               </div>

//               <div className="dropdown-subsection">
//                 <div className="sub-btn">Obstetrics & Gynaecology</div>
//                 <div className="sub-dropdown">
//                   {[
//                     "Pregnancy Care", "Deliveries", "Menstrual and Bleeding", "Ectopic Pregnancies", "Menopausal Care", "Family Planning", "Hysteroscopy", "Laparoscopy", "Uterine and Ovarian Surgeries"
//                   ].map((item) => (
//                     <Link key={item} to="/services/pregnancy" onClick={() => setMenuOpen(false)}>{item}</Link>
//                   ))}
//                 </div>
//               </div>

//               <div className="dropdown-subsection">
//                 <div className="sub-btn">Reproductive Medicine</div>
//                 <div className="sub-dropdown">
//                   {["PCOD", "Infertility Issues", "OITI", "IUI"].map((item) => (
//                     <Link key={item} to="/services/gynecology" onClick={() => setMenuOpen(false)}>{item}</Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="dropdown">
//             <div className="dropbtn">Insights ▾</div>
//             <div className="dropdown-content">
//               <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
//               <Link to="#" onClick={handleScrollToTestimonials}>Sukam Voices</Link>
//               <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
//               <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
//             </div>
//           </div>

//           <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
//         </div>

//         <div className="right-section">
//           <button className="btns" onClick={() => navigate("/access-lab-reports")}>Access Lab Reports</button>
//           <button className="btns" onClick={() => navigate("/appointment")}>Book an Appointment</button>
//           <button className="btns" id="emergency" onClick={() => setShowEmergencyModal(true)}>
//             <FaPhoneAlt className="text-white text-xl mr-1" /> Emergency
//           </button>
//         </div>
//       </div>

//       {showEmergencyModal && <EmergencyModal onClose={() => setShowEmergencyModal(false)} />}

//       <div className="bottom-mobile-nav">
//         <button onClick={() => navigate("/")}><FaHome /> Home</button>
//         <button onClick={() => navigate("/access-lab-reports")}><FaFileMedicalAlt /> Lab Reports</button>
//         <button onClick={() => navigate("/appointment")}><FaCalendarAlt /> Book</button>
//         <button id="emergency-bottom" onClick={() => setShowEmergencyModal(true)}><FaPhoneAlt /> Emergency</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

