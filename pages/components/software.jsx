import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const CTASection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-800">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Transform Your Digital Experience Today
            </h2>
            <p className="max-w-2xl mt-4 text-lg text-gray-200">
              Join thousands of satisfied customers who have already elevated their online presence with our cutting-edge solutions.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-br from-[#5751d0] to-[#5751d0] rounded-full group hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${isClicked ? "scale-95" : ""}`}
              aria-label="Get Started Now"
            >
              Get Started Now
              <FiArrowRight
                className={`ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                size={20}
              />
              {isClicked && (
                <span className="absolute top-0 left-0 w-full h-full animate-ping rounded-full bg-white/20" />
              )}
            </button>
            <p className="text-sm text-gray-300">
              {isClicked ? "Thanks for your interest!" : "No credit card required"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;