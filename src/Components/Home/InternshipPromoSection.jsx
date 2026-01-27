import React from "react";
import img1 from "../../assets/Internship-img-1.png";
import img2 from "../../assets/Internship-img-2.png";
import img3 from "../../assets/Internship-img-3.png";

import { FiArrowRight } from "react-icons/fi";

export default function InternSection() {
  return (
    <div className="bg-white md:py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto relative">
        {/* Top Right Image */}
        <div className="absolute top-0 right-10 w-32 h-32 hidden lg:block">
          <img
            src={img2}
            alt="Professional lawyer walking"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-10 left-0 w-32 h-32 hidden lg:block">
          <img
            src={img1}
            alt="Lawyer in courtroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-0 w-40 h-40 hidden lg:block">
          <img
            src={img3}
            alt="Professional with briefcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center py-20 md:py-32">
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            become our intern
          </h2>

          <p className="text-gray-600 max-w-md mb-8 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Eiusmod tempor incididunt ut labore et dolore. magna
          </p>

          <button className="inline-flex cursor-pointer items-center gap-2 bg-[#BE7D60] hover:bg-amber-800 text-white px-6 md:px-8 py-3 transition-colors">
            <span className="text-sm md:text-base">Free Consultation</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
