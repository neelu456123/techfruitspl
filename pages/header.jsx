import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react'; // Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex">
              <img
                className="w-auto h-26"
                src="https://techfruitspl.com/next-img/techfruitlogo.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Centered Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-base font-semibold text-black hover:text-opacity-80">IT Solutions</a>
            <a href="#" className="text-base font-semibold text-black hover:text-opacity-80">IT Services</a>
            <a href="#" className="text-base font-semibold text-black hover:text-opacity-80">Softwares</a>
            <a href="#" className="text-base font-semibold text-black hover:text-opacity-80">Contact us</a>
          </div>

          {/* Right corner buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:support@techfruit.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {/* Menu closed icon */}
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Menu open icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <a href="#" className="block text-black font-semibold">Features</a>
            <a href="#" className="block text-black font-semibold">Solutions</a>
            <a href="#" className="block text-black font-semibold">Resources</a>
            <a href="#" className="block text-black font-semibold">Pricing</a>
            <a href="mailto:support@techfruit.com" className="flex items-center text-blue-600 font-semibold">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 font-semibold">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
