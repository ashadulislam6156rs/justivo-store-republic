import React from "react";

export default function JusticeHero() {
  return (
    <div className="max-w-7xl mx-auto flex items-center gap-10 md:gap-50 px-5 md:px-10  md:pt-12 pb-10 overflow-hidden">
      {/* Left Section - Text */}
      <div className="space-y-4">
        <h1 className="md:text-8xl text-3xl font-light">
          <span className="text-black">Justice. Advocacy.</span>
          <br />
          <span className="text-amber-700">Results.</span>
        </h1>
      </div>

      {/* Right Section - Circular Badge */}
      <div className="relative">
        <svg className="md:w-30 w-20 md:20 h-30" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text
            className="text-[10px] fill-black uppercase tracking-wider"
            textLength="471"
            lengthAdjust="spacing"
          >
            <textPath href="#circlePath" startOffset="0%">
              We'll solve your problem today • We'll solve your problem today •
              We'll solve your problem today •
            </textPath>
          </text>
        </svg>

        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-amber-100"></div>
        </div>
      </div>
    </div>
  );
}
