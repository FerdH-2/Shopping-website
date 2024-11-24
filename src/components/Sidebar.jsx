import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBasket } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <section
      className={`${
        sidebar
          ? "bg-dark-blue-700 w-44 h-[200px] absolute right-0 opacity-1 transition-all ease-in-out"
          : "bg-dark-blue-700 w-44 h-[200px] absolute right-0 opacity-0 transition-all ease-in-out"
      }`}
    >
      <ul className="flex flex-col justify-center items-center h-full gap-8 text-gray-100 font-bold">
        <Link
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSidebar(false)}
          to="/"
        >
          <FaHome className="text-green-500 text-xl" /> Home
        </Link>
        <Link
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSidebar(false)}
          to="/products"
        >
          <FaShoppingBasket className="text-green-500 text-xl" /> Products
        </Link>
        <Link
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSidebar(false)}
          to="/contact"
        >
          <FaSignal className="text-green-500 text-xl" /> Contact
        </Link>
      </ul>
    </section>
  );
};

export default Sidebar;
