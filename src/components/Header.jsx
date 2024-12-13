import React, { useState } from "react";
import logo from "../assets/logo.png";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the mobile navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="site-header bg-dark fixed top-0 left-0 right-0 z-999">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-12 h-20 sm:h-20 md:h-auto w-full bg-dark z-50 transition-all duration-200">
          <a href="#" className="site-brand-wrapper">
            <img
              alt="Brand logo"
              loading="lazy"
              width="152"
              height="44"
              decoding="async"
              className="h-9 w-32 transition-all duration-200"
              src={logo}
              style={{ color: "transparent" }}
            />
          </a>

          <nav>
            <button
              className="hidden navigation-toggler"
              onClick={toggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white hamburg-icon transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <ul
              className={`${
                isNavOpen ? "translate-x-0" : "translate-x-full"
              } site-navbar-nav fixed w-full left-0 right-0 bg-transparent space-y-4 p-4 transform transition duration-200 md:relative md:flex md:items-center md:min-h-0 md:space-y-0 md:space-x-3 md:p-0 md:translate-x-0 md:visible`}
            >
              <li>
                <button className="is_active active text-white block md:inline-block border-b md:border-b-4 border-transparent hover:border-hoverborder active:border-hoverborder text-tiny md:text-base hover:text-white active:text-white focus:outline-none transition duration-300 py-1 md:py-[30px] px-[15px]">
                  Overview
                </button>
              </li>
              <li>
                <button className="active text-white block md:inline-block border-b md:border-b-4 border-transparent hover:border-hoverborder active:border-hoverborder py-1 md:py-[30px] px-[15px] text-tiny md:text-base hover:text-white active:text-white focus:outline-none transition duration-300 opacity-70 hover:opacity-100">
                  Tech Specs
                </button>
              </li>
              <li>
                <button className="active text-white block md:inline-block border-b md:border-b-4 border-transparent hover:border-hoverborder active:border-hoverborder py-1 md:py-[30px] px-[15px] text-tiny md:text-base hover:text-white active:text-white focus:outline-none transition duration-300 opacity-70 hover:opacity-100">
                  About
                </button>
              </li>
              <li>
                <button className="active text-white block md:inline-block border-b md:border-b-4 border-transparent hover:border-hoverborder active:border-hoverborder py-1 md:py-[30px] px-[15px] text-tiny md:text-base hover:text-white active:text-white focus:outline-none transition duration-300 opacity-70 hover:opacity-100">
                  Contact
                </button>
              </li>
              <li>
                <button className="download-info lg:ml-[103px] text-white block w-full md:w-auto md:inline-block pt-2 pb-2 h-[40px] px-6 text-tiny md:text-base border border-solid border-lightgray rounded-full">
                  Download Info
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
