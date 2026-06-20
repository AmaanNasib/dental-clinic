import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Accessibility from "../pages/Accessibility";
import AdvancedTechnology from "../pages/AdvancedTechnology";
import BeforeAfter from "../pages/BeforeAfter";
import ContactUs from "../pages/ContactUs";
import FAQs from "../pages/FAQs";
import HipaaNotice from "../pages/HipaaNotice";
import InsuranceFinancing from "../pages/InsuranceFinancing";
import NewPatients from "../pages/NewPatients";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Reviews from "../pages/Reviews";
import TermsOfUse from "../pages/TermsOfUse";

import Blog from "../pages/blog/Blog";
import BlogDetail from "../pages/blog/BlogDetail";

import Locations from "../pages/locations/Locations";
import LocationDetail from "../pages/locations/LocationDetail";

import Doctors from "../pages/doctors/Doctors";
import DoctorDetail from "../pages/doctors/DoctorDetail";

import Services from "../pages/services/Services";
import ServiceDetail from "../pages/services/ServiceDetail";

import SmileGallery from "../pages/smile-gallery/SmileGallery";
import SmileGalleryCategory from "../pages/smile-gallery/SmileGalleryCategory";
import ScrollToTop from "../components/common/ScrollToTop";
import SmoothScroll from "../components/common/SmoothScroll";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/advanced-technology" element={<AdvancedTechnology />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/hipaa-notice" element={<HipaaNotice />} />
        <Route path="/insurance-financing" element={<InsuranceFinancing />} />
        <Route path="/new-patients" element={<NewPatients />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<LocationDetail />} />

        <Route path="/our-doctors" element={<Doctors />} />
        <Route path="/our-doctors/:slug" element={<DoctorDetail />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        <Route path="/smile-gallery" element={<SmileGallery />} />
        <Route
          path="/smile-gallery/:category"
          element={<SmileGalleryCategory />}
        />
      </Routes>
    </BrowserRouter>
  );
}