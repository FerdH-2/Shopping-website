import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 absolute w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full text-center sm:text-left">
            <h1 className="text-xl font-bold">
              <span className="font-extralight">GrabNGo</span>-Xtra
            </h1>
            <p className="mt-2 text-sm">
              © 2024 YourCompany. All rights reserved.
            </p>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="w-full mt-4 sm:mt-0">
            <ul className="space-y-2 sm:space-y-0 sm:flex sm:space-x-6 justify-center sm:justify-start">
              <li>
                <Link to="/products" className="hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-gray-400 underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
