import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="mt-28 relative w-full">
      {/* Background Images - Responsive Switching */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full h-auto hidden md:block object-cover rounded-4xl"
        style={{ minHeight: "400px", maxHeight: "600px" }}
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full h-auto md:hidden object-cover rounded-4xl mt-16 sm:mt-20"
        style={{ minHeight: "300px" }}
      />

      {/* Content Overlay - Responsive Positioning */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-12 sm:pb-16 md:pb-0 px-4 sm:px-6 md:pl-12 lg:pl-24 xl:pl-32">
        {/* Responsive Typography */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl leading-snug sm:leading-tight md:leading-normal lg:leading-relaxed">
          Herb's Inn Serving you with Nature
        </h1>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-6 md:mt-8 gap-3 sm:gap-4 font-medium">
          <Link
            to={"/products"}
            className="group h-10 sm:h-12 flex items-center gap-2 px-6 sm:px-8 md:px-9 bg-primary hover:bg-primary-dull transition-all duration-300 rounded-lg text-white cursor-pointer text-sm sm:text-base"
          >
            Shop now
            <img
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            to={"/products"}
            className="group h-10 sm:h-12 flex md:hidden items-center gap-2 px-6 sm:px-8 cursor-pointer text-sm sm:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Explore Details
            <img
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-8 py-3 cursor-pointer text-base lg:text-lg hover:text-primary transition-all duration-300"
          >
            Explore Details
            <img
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
