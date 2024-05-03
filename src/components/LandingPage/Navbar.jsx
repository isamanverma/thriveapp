import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="dark:bg-lightGray w-full bg-white shadow-md">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/Images/logo.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-green-500 dark:text-black">
              Thrive
            </span>
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link to="signup">
              <button
                type="button"
                className="rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-medium text-white hover:scale-105 hover:bg-green-700 focus:outline-none dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-500"
              >
                Log in
              </button>
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M3 6h10M3 12h10" : "M1 1h15M1 7h15M1 13h15"}
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:flex md:w-auto ${
              isOpen ? "block" : "hidden"
            }`} // Toggle visibility based on isOpen state
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg text-black md:mt-0 md:flex-row md:space-x-8">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2  md:bg-transparent md:p-0 md:hover:text-green-700 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700  md:p-0 md:hover:text-green-700 "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 md:p-0 md:hover:text-green-700 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
