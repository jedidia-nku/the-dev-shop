import React from 'react'
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProcessSection from "../components/ProcessSection"
import Testimonials from "../components/Testimonials"
import TopNav from "../components/TopNav"

const Home:React.FC = () => {
  return (
    <div>
    <TopNav />
    <Navbar />
    <HeroSection />
    <Testimonials />
    <ProcessSection />
    <Footer />
    </div>
  )
}

export default Home
