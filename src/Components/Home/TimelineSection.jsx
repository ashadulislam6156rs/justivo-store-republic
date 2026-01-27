import React from "react";
import imag1 from "../../assets/timeline-image-1.png";
import imag2 from "../../assets/timeline-image-2.png";
import arrow from "../../assets/arrow.png";


const timelineData = [
  {
    year: "1971",
    title: "Founded in London",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    year: "1986",
    title: "Firm Expansion",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    year: "1991",
    title: "Landmark Case Victory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-white py-6 md:py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-28 justify-between">
        {/* Left Side - Images */}
        <div className="space-y-6">
          <img
            src={imag1}
            alt="Justice scale"
            className="rounded-lg shadow-md"
          />
          <img
            src={imag2}
            alt="Lawyer walking"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* middle Side - Timeline */}
        <div>
          <h2 className="text-2xl md:text-4xl font-normal mb-6 solid-color">
            Serving clients in every area of law since 1971 with experience and
            dedication.
          </h2>

          <div className="space-y-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div> */}
                <h3 className="text-3xl font-bold text-gray-700">
                  {item.year}
                </h3>
                <h4 className="text-lg font-semibold text-gray-600 flex items-center gap-2">
                  {item.title}{" "}
                  <hr className="inline-block w-20 text-[#be7d60]" />
                </h4>
                <p className="solid-color mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side - Timeline */}
        <div className="hidden md:flex items-center justify-center">
          <img
            className="border-l pl-3 border-[#be7d60] h-35 w-20"
            src={arrow}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
