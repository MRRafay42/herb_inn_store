import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of banner data (images and optional different text for each)
  const banners = [
    {
      bg: assets.main_banner_bg,
      bgSm: assets.main_banner_bg_sm,
      title: "Herb's Inn Serving you with Nature",
    },
    {
      bg: assets.main_banner_bg, // You'll need to add these assets
      bgSm: assets.main_banner_bg_sm,
      title: "Premium Organic Herbs & Spices",
    },
    {
      bg: assets.main_banner_bg,
      bgSm: assets.main_banner_bg_sm,
      title: "Nature's Healing Power in Every Product",
    },
    {
      bg: assets.main_banner_bg,
      bgSm: assets.main_banner_bg_sm,
      title: "Traditional Remedies for Modern Life",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="mt-10 relative w-full overflow-hidden">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Background Images - Responsive Switching */}
            <img
              src={banner.bg}
              alt={`banner-${index}`}
              className="w-full h-auto hidden md:block object-cover rounded-4xl"
              style={{ minHeight: "400px", maxHeight: "600px" }}
            />
            <img
              src={banner.bgSm}
              alt={`banner-${index}-mobile`}
              className="w-full h-auto md:hidden object-cover rounded-4xl "
              style={{ minHeight: "300px" }}
            />

            {/* Content Overlay - Responsive Positioning */}
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-12 sm:pb-16 md:pb-0 px-4 sm:px-6 md:pl-12 lg:pl-24 xl:pl-32">
              {/* Responsive Typography */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl leading-snug sm:leading-tight md:leading-normal lg:leading-relaxed text-white drop-shadow-md">
                {banner.title}
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
                  className="group h-10 sm:h-12 flex md:hidden items-center gap-2 px-6 sm:px-8 cursor-pointer text-sm sm:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 bg-white"
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
                  className="group hidden md:flex items-center gap-2 px-8 py-3 cursor-pointer text-base lg:text-lg hover:text-primary transition-all duration-300 text-white"
                >
                  Explore Details
                  <img
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    src={assets.white_arrow_icon}
                    alt="arrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + banners.length) % banners.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
