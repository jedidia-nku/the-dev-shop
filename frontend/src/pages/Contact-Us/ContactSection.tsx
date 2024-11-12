import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Navbar from '../../components/Navbar';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';

const ContactSection: React.FC = () => {
  return (
    <>
    <TopNav />
    <Navbar />
    <section>
      <div
        className="relative bg-cover bg-center h-[45vh] text-white animate-fadeIn"
        style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
        {/* Content */}
        <div className="relative flex flex-col pt-10 gap-4 h-full px-4 text-center animate-slideIn">
          <h1 className="text-5xl font-light animate-zoomIn">Contact Us</h1>
          <p className="text-2xl font-md mt-2">HOW CAN WE HELP?</p>
        </div>
      </div>

      <div className="relative flex justify-center h-[90vh] bg-gray-100 py-16 animate-fadeIn">
        <div className="absolute w-[80%] mx-auto px-4 -top-24 md:flex md:space-x-8 animate-slideIn">
          <div className="md:w-2/3 md:mb-0">
            <ContactForm />
          </div>
          <div className="md:w-1/3">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactSection;
