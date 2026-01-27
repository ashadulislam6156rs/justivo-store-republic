import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import vector from "../../assets/Vector.png"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mostahid Patwary",
      role: "From USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Grace Morgan",
      role: "From UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
    },
    {
      id: 3,
      name: "Benjamin Scott",
      role: "From Canada",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 4,
      name: "James Walker",
      role: "From USA",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 5,
      name: "Emma Wallace",
      role: "From Australia",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  const [active, setActive] = useState(testimonials[3]);

  return (
    <section className="bg-[#0b1622] text-white py-24 px-2 md:px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute bottom-20 right-10 md:right-10 opacity-5 pointer-events-none">
        <img className="w-40 h-40" src={vector} alt="" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <div className="flex justify-center gap-1.5 mb-10">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-white text-sm" />
          ))}
        </div>

        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-light mb-12 max-w-4xl mx-auto px-4">
          {active.text}
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <img
            src={active.image}
            alt={active.name}
            className="w-12 h-12 rounded-full object-cover shadow-lg"
          />
          <div className="text-left">
            <h4 className="text-lg font-medium leading-none">{active.name}</h4>
            <span className="text-[12px] text-gray-400 uppercase tracking-tighter">
              {active.role}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-10  pt-10">
          {testimonials.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`text-[13px] cursor-pointer md:text-sm transition-all duration-300 relative pb-1 font-light ${
                active.id === item.id
                  ? "text-white border-b-2 border-white font-normal"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border-b border-gray-700 pb-1"
          >
            Check out our google review
            <FiArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
