import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import ExperienceSection from "./components/ExperienceSection";
import Gallery from "./components/Gallery";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import BlogDetails from "./components/BlogDetails";
import GoogleReviews from "./components/GoogleReviews";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
// import PregnancyTreatment from "./pages/PregnancyTreatment";
import PCODTreatment from "./pages/PCODTreatment";
// import ThyroidSurgeries from "./pages/ThyroidSurgeries";
// import Chronic from "./pages/chronic";
// import Endoscopy from "./pages/endoscopy";
// import Pancreas from "./pages/pancreas";
// import Fertility from "./pages/fertility";
// import Uterine from "./pages/uterine";
import Contact from "./components/Contact";
import AccessReportsLogin from "./pages/AccessReportsLogin";
import Treatment1 from "./pages/treatment1";
import Treatment2 from "./pages/treatment2";
import Testimonials from "./components/Testimonials";
import AppointmentPage from "./pages/AppointmentPage";
import DoctorProfile from "./pages/DoctorProfile";
import FAQ from "./components/FAQ";
import FertilityExperts from "./components/FertilityExperts";
import HomeWelcomeBanner from "./components/HomeWelcomeBanner";
import TabbedServicesSection from "./components/TabbedServicesSection";
import ScrollToTop from "./ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import GeneralSurgery from "./pages/GeneralSurgery";
import ObstetricsGynaecology from "./pages/ObstetricsGynaecology";
import ReproductiveMedicine from "./pages/ReproductiveMedicine";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import IndividualTreatment from "./pages/IndividualTreatment";
import CoreValues from "./pages/CoreValues";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
              <div id="top"></div>
              <div id="carousel"><CarouselComponent/></div>
              <div id="exceptional-care"><HomeWelcomeBanner /></div>
              <TabbedServicesSection/>
              <ExperienceSection />
              <div id="fertility-experts"><FertilityExperts /></div>
              <div id="testimonials"><Testimonials /></div>
              <RecentBlogs />
              <Gallery />
              <div id="reviews"><GoogleReviews /></div>
      <       FAQ />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          {/* About Page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/CoreValues" element={<CoreValues />} />
          <Route path="/access-lab-reports" element={<AccessReportsLogin />} />

          {/* ✅ Appointment Page */}
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/doctor-profile/:doctorId" element={<DoctorProfile />} />

          {/* Treatment Pages */}
          <Route path="/services/surgery" element={<GeneralSurgery />} />
          <Route path="/treatments/IndividualTreatment" element={<IndividualTreatment />} />
          <Route path="/services/pregnancy" element={<ObstetricsGynaecology />} />
          <Route path="/services/gynecology" element={<ReproductiveMedicine />} />

          {/* <Route path="/uterine" element={<Uterine />} />
          <Route path="/fertility" element={<Fertility />} />
          <Route path="/ThyroidSurgeries" element={<ThyroidSurgeries />} />
          <Route path="/chronic" element={<Chronic />} />
          <Route path="/endoscopy" element={<Endoscopy />} />
          <Route path="/pancreas" element={<Pancreas />} /> */}

          {/* Blog Pages */}
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          {/* Other Resource Pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Location Pages */}
          <Route path="/Contact" element={<Contact />} />

          {/* Extra Treatments */}
          <Route path="/treatment1" element={<Treatment1 />} />
          <Route path="/treatment2" element={<Treatment2 />} />

          
        </Routes>
      </div>
      <FloatingWhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
