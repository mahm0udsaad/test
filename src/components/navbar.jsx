import React, { useState } from 'react';
import logo from "../assets/394672c7-921a-4ab3-8882-82d8343f5cb0 1.svg"
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          loading="lazy"
          src={logo}
          className="h-8"
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-end items-center space-x-6">
          <a href="#" className="text-black text-lg font-semibold">
            Home
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            Our Service
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            Resources
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            Business
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            Market
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            About Us
          </a>
          <a href="#" className="text-black text-lg font-semibold">
            Contact Us
          </a>
          <button className="rouded-lg p-4 bg-black text-white">
             <IoSearch />
          </button>
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-xl focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3">
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Home
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Our Service
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Resources
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Business
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Market
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            About Us
          </a>
          <a href="#" className="block text-black text-lg font-semibold py-2">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
