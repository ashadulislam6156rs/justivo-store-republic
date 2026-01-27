import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your subscription logic here
  };

  return (
    <div className="bg-gradient-to-br from-[#BE7D6040] to-[#BE7D6060] py-14 px-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center border-b-2 border-gray-400 transition-all duration-300 hover:border-amber-700 focus-within:border-amber-700">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter you email.."
              className="flex-1 bg-transparent text-xl py-4 px-2 outline-none placeholder-black text-gray-800"
              required
            />

            <button
              type="submit"
              className="group cursor-pointer flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-all duration-300 px-4 py-4"
            >
              <span className="text-lg">Subscribe</span>
              <FiArrowUpRight
                className={`w-5 h-5 transition-all duration-300 ${
                  isFocused ? "translate-x-1 -translate-y-1" : ""
                } group-hover:translate-x-1 group-hover:-translate-y-1`}
              />
            </button>
          </div>

          {/* Animated underline effect */}
          <div
            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-500 ease-out ${
              isFocused ? "w-full" : "w-0"
            }`}
          />
        </form>

        {/* Success message (optional) */}
        {email.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Stay updated with our latest news and insights
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
