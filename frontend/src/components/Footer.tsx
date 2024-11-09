import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sitemap Section */}
        <div>
          <h3 className="text-lg font-semibold">Sitemap</h3>
          <ul className="mt-4 space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Latest Articles Section */}
        <div>
          <h3 className="text-lg font-semibold">Latest Articles</h3>
          <ul className="mt-4 space-y-4">
            <li>Aeras Fog | Bringing Back Sports</li>
            <li>Angular with Bazel | ngPittsburgh at Philips</li>
            <li>Daniel Lopretto from Meter Feeder</li>
            <li>The Dev Shop collaboration with ADP</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold">The Dev Shop</h3>
          <address className="not-italic mt-4 space-y-2">
            <p>100 Springwood Dr</p>
            <p>Pittsburgh, PA 15147</p>
            <p>contact@thedevshop.com</p>
            <p>412.219.4487</p>
            <p>1.800.597.1620</p>
          </address>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 flex justify-center space-x-6">
        <FaFacebook className="text-2xl hover:text-blue-500" />
        <FaTwitter className="text-2xl hover:text-blue-400" />
        <FaLinkedin className="text-2xl hover:text-blue-600" />
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>Copyright © The Dev Shop 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
