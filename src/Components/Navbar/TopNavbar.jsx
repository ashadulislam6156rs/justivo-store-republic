import React from 'react';

const TopNavbar = () => {
    return (
      <div className="flex md:flex-row flex-col justify-between items-center border-b pb-3 border-gray-200">
        {/* Left */}
        <ul className="flex gap-5 items-center list-none text-base font-normal text-[#000000c0]">
          <li>FAQ</li>
          <li>Personnel</li>
          <li>Our Expertise</li>
        </ul>
        {/* Right */}
        <div className="flex gap-5 items-center list-none">
          <li>consultancy@email.com</li>
          <p>Mon - Sat : 8:00 - 16:00</p>
        </div>
      </div>
    );
};

export default TopNavbar;