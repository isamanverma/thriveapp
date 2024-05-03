import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Thrive</h2>
            <p className="mt-2 text-sm text-gray-400">
              Empowering you to live your best life.
            </p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Thrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
