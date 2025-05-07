import React from "react";
import { assets } from "../assets/assets";

const MainBanner = () => {
  // Function to handle WhatsApp redirection
  const handleWhatsAppClick = () => {
    const phoneNumber = "03004219745";
    const message = "Hello, I would like to book an appointment.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-12 relative w-full group overflow-hidden rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-500">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 md:mb-8">
        Our Services
        <div className="w-36 h-0.5 bg-primary rounded-full"></div>
      </p>
      {/* Background Image Container with Parallax Effect */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src={assets.middlebanner}
          alt="luxury spa banner"
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:justify-center md:items-start md:pb-0 md:pl-5 lg:pl-12 px-4">
        {/* Text Content with Animation */}
        <div className="text-center md:text-left transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
            Natural Medicine Doctor
          </h1>
        </div>

        {/* Buttons with Hover Effects */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={handleWhatsAppClick}
            className="relative cursor-pointer hover:bg-green-200 overflow-hidden h-12 px-8 flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Now
              <img
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                src={assets.white_arrow_icon}
                alt="arrow"
              />
            </span>
            <span className="absolute inset-0 bg-primary-dull opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-4 right-4 hidden md:block">
        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
          ★ Premium Experience
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
