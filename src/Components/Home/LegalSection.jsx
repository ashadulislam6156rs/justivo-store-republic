import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import logicImage from "../../assets/logic-section-image.png"

export default function LegalSection() {
  return (
    <div className="max-w-7xl mx-auto px-1">
      {/* top section */}
      <div className="flex gap-3">
        <div className="flex-col hidden md:flex gap-4 items-center justify-center">
          <p
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Dribbble
          </p>
          <p
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            LinkedIn
          </p>
          <p
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Github
          </p>
          <p
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Behance
          </p>
          <p
            className="text-[#be7d60]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Dribbble
          </p>
        </div>
        <img className="md:pr-18" src={logicImage} alt="" />
      </div>

      {/* Content bottom Section */}
      <div className=" px-5 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-5 md:gap-17">
          {/* Left Card - Main Heading */}
          <div className="space-y-6 flex-1">
            <h2 className="text-3xl font-light leading-tight">
              Driving impact through global legal initiatives
            </h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua velit
              esse cillum dolore eu fugiat
            </p>
          </div>

          {/* Middle Card */}
          <div className="space-y-6 flex flex-1 flex-col justify-center">
            <h3 className="text-xl font-light">
              Smart, actionable tips for modern businesses
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all group"
            >
              <span>Read More</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right Card */}
          <div className="space-y-6 flex-1">
            <h3 className="text-4xl font-light">960k+</h3>
            <p className="text-xl font-light">
              Helping you move forward with confidence
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all group"
            >
              <span>Read More</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
