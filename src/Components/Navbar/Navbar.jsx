import React from 'react';
import TopNavbar from './TopNavbar';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"

const Navbar = () => {
 const links = (
   <>
     <li>
       <NavLink
         to={"/"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent flex items-center"
         }
       >
         Home
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/about-us"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         About Us
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/practice-areas"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         Practice Areas
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/our-team"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         Our Team
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/case-studies"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         Case Studies
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/blog"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         Blog
       </NavLink>
     </li>
     <li>
       <NavLink
         to={"/contact"}
         className={({ isActive }) =>
           isActive
             ? "text-[#F57C00] bg-transparent"
             : "hover:text-[#F57C00] bg-transparent"
         }
       >
         Contact
       </NavLink>
     </li>
   </>
 );

    return (
      <div className="max-w-7xl mx-auto px-5 pt-3">
        <TopNavbar></TopNavbar>
        <div className="navbar bg-base-100 p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link className="text-xl flex gap-2 items-center bg-transparent border-0 hover:outline-0">
              <img className="w-10 h-10" src={logo} alt="website logo" />
              <h1 className="text-2xl font-normal solid-color">JUSTIVO</h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-neutral">Free Consultation</button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;