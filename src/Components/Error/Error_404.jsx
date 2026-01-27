import React, { useState, useEffect } from "react";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const parallaxX = (mousePosition.x - window.innerWidth / 2) / 50;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) / 50;

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-600 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Justice scales background decoration */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M500 200 L500 600 M500 300 L350 350 M500 300 L650 350 M300 350 L400 350 L350 400 L300 400 Z M600 350 L700 350 L650 400 L600 400 Z"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-white"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* 404 Number with glitch effect */}
        <div className="mb-8 relative">
          <h1
            className={`text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter transition-all duration-200 ${
              glitchActive ? "animate-glitch" : ""
            }`}
            style={{
              background:
                "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: glitchActive
                ? "0 0 30px rgba(245, 158, 11, 0.5)"
                : "none",
            }}
          >
            404
          </h1>

          {/* Floating decorative elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-amber-600 rotate-45 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-amber-600 animate-bounce-slow"></div>
        </div>

        {/* Legal themed message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white animate-fade-in-up">
            Case Dismissed
          </h2>
          <p className="text-xl text-gray-800 font-light max-w-2xl mx-auto animate-fade-in-up-delay">
            The page you're looking for has been objected and sustained. No
            evidence of its existence in our records.
          </p>
        </div>

       

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
          <a
            href="/"
            className="group flex items-center gap-3 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-700/50"
          >
            <FiHome className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Return Home</span>
          </a>

          <a
            href="javascript:history.back()"
            className="group flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 transition-all duration-300 hover:scale-105"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Go Back</span>
          </a>

         
        </div>

        {/* Error code */}
        <div className="mt-12 text-xs text-gray-600 uppercase tracking-widest animate-fade-in-up-delay-4">
          Error Code: 404 | Page Not Found | HTTP Status
        </div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-amber-700 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-amber-700 opacity-30 animate-pulse"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-4 {
          animation: fade-in-up 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
