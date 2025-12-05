import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiAmbulance } from "react-icons/pi";
import { TbAmbulance } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/mybookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <span className="text-secondary text-3xl">
              <FaHandHoldingMedical />
            </span>
            <span className="text-primary">MedBridge</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mybookings">My Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:block">
            <a className="btn sm:btn-sm md:btn-md btn-primary ">
              <span className="text-2xl mr-1">
                <PiAmbulance />
              </span>
              Emergency
            </a>
          </div>
          <div className="block md:hidden mr-2">
            <a className="btn sm:btn-sm btn-soft btn-primary btn-circle p-4">
              <span className="text-2xl">
                <PiAmbulance />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
