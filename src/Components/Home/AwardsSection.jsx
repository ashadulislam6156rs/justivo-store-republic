import React from "react";
import { FiArrowRight } from "react-icons/fi";
import image1 from "../../assets/person-5.png"
import image2 from "../../assets/person-6.png"
import image3 from "../../assets/person-7.jpg"
import image4 from "../../assets/person-8.jpg"

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      number: "54+",
      unit: "/Years",
      subtitle: "of legal excellence",
      img: image1,
      title: "Best law firm of the year",
      desc: "Awarded for outstanding legal service and client satisfaction across all practice areas.",
    },
    {
      id: 2,
      number: "500+",
      unit: "/Cases",
      subtitle: "successfully resolved",
      img: image2,
      title: "Top litigation firm – national legal excellence awards",
      desc: "Recognized for exceptional courtroom performance and high-profile case victories.",
    },
    {
      id: 3,
      number: "850k+",
      unit: "/Areas",
      subtitle: "handled across jurisdictions",
      img: image4,
      title: "Client choice award for legal services",
      desc: "Honored for consistent client satisfaction, trust, and long-term relationships.",
    },
    {
      id: 4,
      number: "10k+",
      unit: "/Hours",
      subtitle: "of courtroom representation",
      img: image3,
      title: "Client choice award for legal services",
      desc: "Honored for consistent client satisfaction, trust, and long-term relationships.",
    },
  ];

  return (
    <section className="bg-white md:py-20 md:pt-50 px-5 md:px-10">
      <div className="max-w-7xl mx-auto border-t border-gray-100">
        {awards.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 items-center py-10 border-b border-gray-100 gap-6 md:gap-0"
          >
            {/* Left */}
            <div className="md:col-span-3">
              <div className="flex items-baseline gap-1">
                <h2 className="text-5xl font-normal tracking-tighter text-gray-800">
                  {item.number}
                </h2>
                <span className="text-md solid-color font-light">
                  {item.unit}
                </span>
              </div>
              <p className="text-[13px] solid-color mt-1 uppercase tracking-wide">
                {item.subtitle}
              </p>
            </div>

            {/* Middle*/}
            <div className="md:col-span-4 flex items-center gap-6">
              <img
                src={item.img}
                className="w-20 h-20 rounded-tl-[15px] rounded-br-[15px] object-cover grayscale-[0.5]"
                alt="Award"
              />
              <h3 className="text-2xl font-normal leading-tight text-gray-800 max-w-[220px]">
                {item.title}
              </h3>
            </div>

            {/* Right */}
            <div className="md:col-span-5 flex items-center justify-between gap-5 md:gap-10">
              <p className="text-[13px] solid-color leading-relaxed max-w-[200px] md:max-w-[300px]">
                {item.desc}
              </p>
              <div className="w-12 h-12 rounded-full border border-[#BE7D60] flex items-center justify-center text-gray-300 hover:text-gray-900 hover:border-gray-900 transition-all cursor-pointer group">
                <FiArrowRight className="text-xl text-[#BE7D60] transform group-hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
