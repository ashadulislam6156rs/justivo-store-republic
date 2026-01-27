import React from "react";

import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.png"

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Secured $2.5m settlement in construction injury case",
      image: img1,
      hasIcon: false,
    },
    {
      id: 2,
      title: "Won full custody for father in complex divorce case",
      image:img2,
      hasIcon: true,
    },
    {
      id: 3,
      title: "Cleared wrongfully accused client in criminal defense case",
      image:img3,
      hasIcon: false,
    },
    {
      id: 4,
      title: "Closed a major m&a deal with full legal oversight",
      image:img4,
      hasIcon: false,
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 ml-10">
          <h2 className="text-3xl lg:text-4xl font-normal sticky top-10">
            Case study
          </h2>
        </div>

        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {caseStudies.map((item) => (
            <div key={item.id} className="group cursor-pointer block">
              {/* Image Container */}
              <div className="overflow-hidden mb-5 relative w-full h-64 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {item.hasIcon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {/* Arrow Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Title Text */}
              <p className="text-xl text-gray-800 font-normal leading-snug pr-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
