import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive ? "text-white-edit-100" : "text-gray-500";
  return (
    <>
      <header className="w-full flex justify-between items-center h-36 bg-dark-blue-900 px-10 relative">
        <Link
          to={"/"}
          className="text-white font-semibold xs:text-3xl [@media(max-width:432px)]:text-xl"
        >
          <span className="font-extralight text-gray-edit-100">Grab</span>
          NGo-Xtra
        </Link>
        <div className="lg:flex justify-center items-center gap-5 md:hidden hidden">
          <FaPhoneSquareAlt
            className="text-4xl text-white"
            title="+234 9038 2484 81"
          />
          <div>
            <p className="text-sm text-gray-edit-100 font-bold tracking-wider">
              Call Center
            </p>
            <p className="text-xl text-white">+234 9038 2484 81</p>
          </div>
        </div>
        <div className="flex items-center gap-5 lg:hidden md:flex">
          <Link to="/cart">
            <FaCartShopping className="text-3xl text-gray-edit-100 hover:text-green-edit-100 cursor-pointer" />
          </Link>
          <FaBars
            className="text-3xl text-gray-edit-100 cursor-pointer"
            onClick={() =>
              sidebar === false ? setSidebar(true) : setSidebar(false)
            }
          />
        </div>
      </header>
      <nav className="w-9/12 bg-dark-blue-700 h-20 lg:flex justify-evenly items-center gap-20 -mt-10 m-auto rounded-full relative hidden md:hidden ">
        <ul className="flex gap-5 text-gray-edit-100 font-semibold items-center">
          <NavLink to="/" className={linkClass}>
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            <FaShoppingCart className="text-3xl" />{" "}
          </NavLink>
        </ul>
      </nav>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
}

export default Header;
