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
import Contact from "./components/Contact";
import AccessReportsLogin from "./pages/AccessReportsLogin";
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
import InfertilityInsights from "./pages/InfertilityInsights";
import CoreValues from "./pages/CoreValues";
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* 🔷 Top Announcement Bar */}
      <div className="top-ribbon">
        <div className="scrolling-text">
          📞 Call us: +91-91081 08980 | +91-81081 08310  &nbsp;&nbsp;&nbsp; 🕒 Open Daily: 5:30 AM – 9:00 PM &nbsp;&nbsp;&nbsp; Sunday closed 
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
          <Route path="/InfertilityInsights" element={<InfertilityInsights />} />
          <Route path="/services/gynecology" element={<ReproductiveMedicine />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/services/pregnancy" element={<ObstetricsGynaecology />} />
        </Routes>
      </main>

      {/* 🔷 Floating Tools and Footer */}
      <FloatingWhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
