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
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import CoreValues from "./pages/CoreValues";
import ServicesPage from "./pages/ServicesPage";

import GeneralSurgery from "./pages/GeneralSurgery";
import SwellingInTheSkin from "./pages/GS1SwellingInTheSkin";
import SkinInfections from "./pages/GS2SkinInfections";
import DiabeticFootUlcer from "./pages/GS3DiabeticFootUlcer";
import PeripheralArterialOcclusion from "./pages/GS4PeripheralArterialOcclusion";
import VaricoseVeins from "./pages/GS5VaricoseVeins";
import DeepVeinThrombosis from "./pages/GS6DeepVeinThrombosis";
import ThyroidSwelling from "./pages/GS7ThyroidSwelling";
import Thyrotoxicosis from "./pages/GS8Thyrotoxicosis";
import NeckNodes from "./pages/GS9NeckNodes";
import Fibroadenoma from "./pages/GS10Fibroadenoma";
import Mastalgia from "./pages/GS11Mastalgia";
import BreastAbscess from "./pages/GS12BreastAbscess";
import UpperGIBleed from "./pages/GS13UpperGIBleed";
import AcuteAbdomen from "./pages/GS14AcuteAbdomen";
import LowerGIBleed from "./pages/GS15LowerGIBleed";
import GERD from "./pages/GS16GERD";
import AchalasiaCardia from "./pages/GS17AchalasiaCardia";
import BarrettEsophagus from "./pages/GS18BarrettEsophagus";
import Dyspepsia from "./pages/GS19Dyspepsia";
import GastricOutletObstruction from "./pages/GS20GastricOutletObstruction";
import IntestinalObstruction from "./pages/GS21IntestinalObstruction";
import FattyLiver from "./pages/GS22FattyLiver";
import ChronicLiverDisease from "./pages/GS23ChronicLiverDisease";
import LiverAbscess from "./pages/GS24LiverAbscess";
import GallStoneDisease from "./pages/GS25GallStoneDisease";
import ObstructiveJaundice from "./pages/GS26ObstructiveJaundice";
import AcutePancreatitis from "./pages/GS27AcutePancreatitis";
import Piles from "./pages/GS28Piles";
import AnalFissure from "./pages/GS29AnalFissure";
import PerianalAbscess from "./pages/GS30PerianalAbscess";
import BPH from "./pages/GS31BPH";
import Hernia from "./pages/GS32Hernia";
import Hydrocele from "./pages/GS33Hydrocele";

import ObstetricsGynaecology from "./pages/ObstetricsGynaecology";
import NormalPregnancyCare from "./pages/OBG1NormalPregnancyCare ";
import HighRiskPregnancy from "./pages/OBG2HighRiskPregnancy";
import PreciousPregnancy from "./pages/OBG3PreciousPregnancy";
import EctopicPregnancy from "./pages/OBG4EctopicPregnancy";
import NutritionExercisePregnancy from "./pages/OBG5NutritionExercisePregnancy";
import NormalLabor from "./pages/OBG6NormalLabor";
import PretermLabor from "./pages/OBG7PretermLabor";
import BleedingInPregnancy from "./pages/OBG8BleedingInPregnancy";
import OperativeDeliveries from "./pages/OBG9OperativeDeliveries";
import IntraPostpartumCare from "./pages/OBG10IntraPostpartumCare";
import MenstrualIrregularities from "./pages/OBG11MenstrualIrregularities";
import UterineFibroids from "./pages/OBG12UterineFibroids";
import OvarianDiseases from "./pages/OBG13OvarianDiseases";
import PCODPCOS from "./pages/OBG14PCODPCOS";
import AbnormalUterineBleeding from "./pages/OBG15AbnormalUterineBleeding";
import CervicalCancer from "./pages/OBG16CervicalCancer";
import UterineOvarianCancers from "./pages/OBG17UterineOvarianCancers";
import MenarcheToMenopause from "./pages/OBG18MenarcheToMenopause";
import FamilyPlanning from "./pages/OBG19FamilyPlanning";
import HysteroLaparoscopy from "./pages/OBG20HysteroLaparoscopy";

import ReproductiveMedicine from "./pages/ReproductiveMedicine";
import InfertilityInsights from "./pages/RP1InfertilityInsights";
import DecliningFertility from "./pages/RP2DecliningFertility";
import MaleInfertility from "./pages/RP3MaleInfertility";
import NaturalPregnancy from "./pages/RP4NaturalPregnancy";
import IUI from "./pages/RP5IUI";
import IVF_ICSI from "./pages/RP6IVF_ICSI";
import EggFreezing from "./pages/RP7EggFreezing";

import Blog1IrregularMenstruation from "./pages/blog1IrregularMenstruation";

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🔷 Top Announcement Bar */}
      <div className="top-ribbon">
        <div className="scrolling-text">
          📞 Call us: +91-91081 08980 | +91-81081 08310 &nbsp;&nbsp;&nbsp;
          🕒 Open Daily: 5:30 AM – 9:00 PM &nbsp;&nbsp;&nbsp; Sunday Closed
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
          <Route path="/SwellingInTheSkin" element={<SwellingInTheSkin />} />
          <Route path="/SkinInfections" element={<SkinInfections />} />
          <Route path="/DiabeticFootUlcer" element={<DiabeticFootUlcer />} />
          <Route path="/PeripheralArterialOcclusion" element={<PeripheralArterialOcclusion />} />
          <Route path="/VaricoseVeins" element={<VaricoseVeins />} />
          <Route path="/DeepVeinThrombosis" element={<DeepVeinThrombosis />} />
          <Route path="/ThyroidSwelling" element={<ThyroidSwelling />} />
          <Route path="/Thyrotoxicosis" element={<Thyrotoxicosis />} />
          <Route path="/NeckNodes" element={<NeckNodes />} />
          <Route path="/Fibroadenoma" element={<Fibroadenoma />} />
          <Route path="/Mastalgia" element={<Mastalgia />} />
          <Route path="/BreastAbscess" element={<BreastAbscess />} />
          <Route path="/UpperGIBleed" element={<UpperGIBleed />} />
          <Route path="/AcuteAbdomen" element={<AcuteAbdomen />} />
          <Route path="/LowerGIBleed" element={<LowerGIBleed />} />
          <Route path="/GERD" element={<GERD />} />
          <Route path="/AchalasiaCardia" element={<AchalasiaCardia />} />
          <Route path="/BarrettEsophagus" element={<BarrettEsophagus />} />
          <Route path="/Dyspepsia" element={<Dyspepsia />} />
          <Route path="/GastricOutletObstruction" element={<GastricOutletObstruction />} />
          <Route path="/IntestinalObstruction" element={<IntestinalObstruction />} />
          <Route path="/FattyLiver" element={<FattyLiver />} />
          <Route path="/ChronicLiverDisease" element={<ChronicLiverDisease />} />
          <Route path="/LiverAbscess" element={<LiverAbscess />} />
          <Route path="/GallStoneDisease" element={<GallStoneDisease />} />
          <Route path="/ObstructiveJaundice" element={<ObstructiveJaundice />} />
          <Route path="/AcutePancreatitis" element={<AcutePancreatitis />} />
          <Route path="/Piles" element={<Piles />} />
          <Route path="/AnalFissure" element={<AnalFissure />} />
          <Route path="/PerianalAbscess" element={<PerianalAbscess />} />
          <Route path="/BPH" element={<BPH />} />
          <Route path="/Hernia" element={<Hernia />} />
          <Route path="/Hydrocele" element={<Hydrocele />} />

          <Route path="/services/gynecology" element={<ObstetricsGynaecology />} />
          <Route path="/NormalPregnancyCare" element={<NormalPregnancyCare />} />
          <Route path="/HighRiskPregnancy" element={<HighRiskPregnancy />} />
          <Route path="/PreciousPregnancy" element={<PreciousPregnancy />} />
          <Route path="/EctopicPregnancy" element={<EctopicPregnancy />} />
          <Route path="/NutritionExercisePregnancy" element={<NutritionExercisePregnancy />} />
          <Route path="/NormalLabor" element={<NormalLabor />} />
          <Route path="/PretermLabor" element={<PretermLabor />} />
          <Route path="/BleedingInPregnancy" element={<BleedingInPregnancy />} />
          <Route path="/OperativeDeliveries" element={<OperativeDeliveries />} />
          <Route path="/IntraPostpartumCare" element={<IntraPostpartumCare />} />
          <Route path="/MenstrualIrregularities" element={<MenstrualIrregularities />} />
          <Route path="/UterineFibroids" element={<UterineFibroids />} />
          <Route path="/OvarianDiseases" element={<OvarianDiseases />} />
          <Route path="/PCODPCOS" element={<PCODPCOS />} />
          <Route path="/AbnormalUterineBleeding" element={<AbnormalUterineBleeding />} />
          <Route path="/CervicalCancer" element={<CervicalCancer />} />
          <Route path="/UterineOvarianCancers" element={<UterineOvarianCancers />} />
          <Route path="/MenarcheToMenopause" element={<MenarcheToMenopause />} />
          <Route path="/FamilyPlanning" element={<FamilyPlanning />} />
          <Route path="/HysteroLaparoscopy" element={<HysteroLaparoscopy />} />

          <Route path="/services/pregnancy" element={<ReproductiveMedicine />} />
          <Route path="/InfertilityInsights" element={<InfertilityInsights />} />
          <Route path="/DecliningFertility" element={<DecliningFertility />} />
          <Route path="/MaleInfertility" element={<MaleInfertility />} />
          <Route path="/NaturalPregnancy" element={<NaturalPregnancy />} />
          <Route path="/IUI" element={<IUI />} />
          <Route path="/IVF_ICSI" element={<IVF_ICSI />} />
          <Route path="/EggFreezing" element={<EggFreezing />} />

          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/Blog1IrregularMenstruation" element={<Blog1IrregularMenstruation/>}/>

          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Sukamvoices" element={<Testimonials/>} />
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
