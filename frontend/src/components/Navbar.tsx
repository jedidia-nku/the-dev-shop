import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const links = ['Home', 'Services', 'About Us', 'Contact Us', 'Careers'];

  return (
        <nav className="sticky top-0 bg-blue-500 z-50 text-white shadow-bottom-lg">
      <div className="container ml-32 flex  space-x-2">
        {links.map((link) => (
          <a
            key={link}
            href={`${link.replace(/\s+/g, '').toLowerCase()}`}
            className={`relative hover:text-gray-200 w-full${
              activeLink === link ? 'text-white text-xl py-2 px-4 border-b-white border-b-4' : 'text-gray-100 text-xl py-2 px-4'
            }`}
            onClick={() => setActiveLink(link)}
          >
            {link}

          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
