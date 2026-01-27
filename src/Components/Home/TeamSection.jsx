import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import bannerImage from "../../assets/banner-absolute.png"
import person1 from "../../assets/person-1.jpg";
import person2 from "../../assets/person-2.png";
import person3 from "../../assets/person-3.png";
import person4 from "../../assets/person-4.png";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alexander reed",
      image: person1,
      location: "New York",
      position: "Senior Partner",
      specialization: "Head of Corporate Law",
    },
    {
      name: "Clara thompson",
      image: person2,
      location: "Chicago",
      position: "Managing Partner",
      specialization: "Lead Business Consultant",
    },
    {
      name: "James whitmore",
      image: person3,
      location: "Los Angeles",
      position: "Courtroom Strategist",
      specialization: "Criminal Defense Attorney",
    },
    {
      name: "Sophia malik",
      image: person4,
      location: "Houston",
      position: "Family Law Attorney",
      specialization: "Child Custody Specialist",
    },
  ];

  return (
    <div className="bg-slate-900 py-20 ">
      <div className="max-w-7xl mx-auto relative md:h-180 px-5 md:px-10">
        <div className="grid md:mx-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Media Icons - Show on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-white text-2xl font-light">
                  {member.name}
                </h3>

                <div className="flex gap-3">
                  <span className="px-2 py-1 border border-gray-600 text-gray-300 text-sm">
                    {member.location}
                  </span>
                  <span className="px-2 py-1 border border-gray-600 text-gray-300 text-sm">
                    {member.position}
                  </span>
                </div>

                <div>
                  <span className="px-2 py-1 border border-gray-600 text-gray-300 text-sm inline-block">
                    {member.specialization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute hidden md:flex mt-20 ml-15">
          <img src={bannerImage} alt="" />
          <h1 className="absolute z-10 bottom-10 left-10 text-xl text-white">
            Contributing Important <br /> Global Initiatives
          </h1>
        </div>
      </div>
    </div>
  );
}
