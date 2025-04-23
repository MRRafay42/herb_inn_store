import React from "react";
import { features } from "../assets/assets";
import bottom_banner_image from "../assets/bootom_banner_new.png";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <p className=" text-center text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 md:mb-8  rounded-2xl">
        Why Herb's Inn
        <div className="w-full h-0.5 bg-primary rounded-full"></div>
      </p>

      <img
        src={bottom_banner_image}
        alt="banner"
        className="w-auto h-80 hidden md:block rounded-tr-3xl"
      />
      <img
        src={bottom_banner_image}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="sm:absolute md:absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 ">
        <div>
          <h1>why we are a Best ?</h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <img
                src={feature.icon}
                alt="feature.title"
                className="md:w-11 w-9"
              />
              <div className="">
                <h3 className="text-lg md:text-1xl font-semibold">
                  {" "}
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
