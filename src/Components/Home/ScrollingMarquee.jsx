import React from "react";
import { FaStar } from "react-icons/fa";

export default function ScrollingMarquee() {
  const items = [
    "Since 1987",
    "Thousands of cases won",
    "Nationwide legal support",
    "Since 1987",
  ];

  return (
    <div className=" py-2 my-10 w-full bg-[#dadada]">
      <div className="relative flex overflow-hidden max-w-7xl mx-auto">
        {/* First set of items */}
        <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
          {items.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="text-2xl font-light text-gray-800">{item}</span>
              <FaStar className="w-4 h-4 text-amber-700 flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div
          className="flex items-center gap-8 animate-scroll whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="text-2xl font-light text-gray-800">{item}</span>
              <FaStar className="w-4 h-4 text-amber-700 flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Third set for extra smooth loop */}
        <div
          className="flex items-center gap-8 animate-scroll whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <React.Fragment key={`third-${index}`}>
              <span className="text-2xl font-light text-gray-800">{item}</span>
              <FaStar className="w-4 h-4 text-amber-700 flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
