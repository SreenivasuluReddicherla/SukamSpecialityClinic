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
import PCODTreatment from "./pages/PCODTreatment";
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
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🔷 Top Announcement Bar */}
      <div className="top-ribbon">
        <div className="scrolling-text">
          📞 Call us: +91-91081 08980 | +91-81081 08310  &nbsp;&nbsp;&nbsp; 🕒 Open Daily: 9:00 AM – 9:00 PM
        </div>
      </div>

      {/* 🔷 Main Navigation */}
      <Navbar />

      {/* 🔷 Main Content Area */}
      <main className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarouselComponent />
                <HomeWelcomeBanner />
                <TabbedServicesSection />
                <ExperienceSection />
                <FertilityExperts />
                <Testimonials />
                <RecentBlogs />
                <Gallery />
                <GoogleReviews />
                <FAQ />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/CoreValues" element={<CoreValues />} />
          <Route path="/access-lab-reports" element={<AccessReportsLogin />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/doctor-profile/:doctorId" element={<DoctorProfile />} />
          <Route path="/services/surgery" element={<GeneralSurgery />} />
          <Route path="/treatments/IndividualTreatment" element={<IndividualTreatment />} />
          <Route path="/services/pregnancy" element={<ObstetricsGynaecology />} />
          <Route path="/services/gynecology" element={<ReproductiveMedicine />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/treatment1" element={<Treatment1 />} />
          <Route path="/treatment2" element={<Treatment2 />} />
        </Routes>
      </main>

      {/* 🔷 Floating Tools and Footer */}
      <FloatingWhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
