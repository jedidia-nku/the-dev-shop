import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/About-Us/AboutUs"
import CareersSection from "./pages/Careers/CareersSection"
import ContactSection from "./pages/Contact-Us/ContactSection"
import Home from "./pages/Home"
import ServicesSection from "./pages/service/ServicesSection"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="/careers" element={<CareersSection />} />
      </Routes>
    </Router>
  )
}

export default App
