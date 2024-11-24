import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/model-1.png";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon-4.png";

const Hero = () => {
  return (
    <>
      <section className="px-10 py-20 lg:grid grid-cols-2 place-items-center gap-5 md:flex flex-wrap bg-hero bg-center bg-cover h-auto w-full -mt-10">
        <div className="md:text-left md:w-full">
          <p className="text-green-500 sm:text-xl mb-2 inner-text-shadow xs:text-base">
            GrabNGo XtraSupermarket
          </p>
          <h3 className="sm:text-5xl font-bold xs:text-3xl">
            Fresher than ever
          </h3>
          <p className="text-gray-500 sm:text-base font-medium text-wrap tracking-wide my-9 xs:my-4 xs:text-base">
            Why waste time running from store to store? At{" "}
            <b>GrabNGo - XtraSupermarket</b>, we have everything you need under
            one roof – from fresh fruits and vegetables to quality meat, pantry
            staples, beverages, and household essentials.
          </p>
          <p className="text-gray-500 sm:text-base font-medium text-wrap tracking-wide my-9 xs:my-4 xs:text-base">
            Stop paying more for less elsewhere! <br /> 🛒 Shop smart, save
            more, and enjoy the best variety – all in one place.
          </p>
          <Link
            to="/products"
            type="button"
            className="text-dark-blue-700 border-2 border-dark-blue-700 rounded-full sm:px-5 sm:py-2 mt-5 sm:text-lg font-bold cursor-pointer transition-all hover:text-white hover:bg-dark-blue-700 ease-in-out xs:px-5 xs:py-2 xs:text-sm"
          >
            Discover Shop
          </Link>
        </div>
        <img src={heroImage} alt="Hero Image" />
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="sm:text-2xl text-center mb-5 font-bold text-gray-700 xs:text-3xl">
          <p>Our Features</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
            <img
              src={icon1}
              alt="Feature 1"
              className="w-10 h-10 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-600 text-xs">On all orders over $50.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
            <img
              src={icon2}
              alt="Feature 2"
              className="w-10 h-10 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Return for Free
            </h3>
            <p className="text-gray-600 text-xs">Returns are free for 3 days</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
            <img
              src={icon3}
              alt="Feature 3"
              className="w-10 h-10 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600 text-xs">Your payments are 100% safe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
            <img
              src={icon4}
              alt="Feature 4"
              className="w-10 h-10 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-xs">Contact us anytime you want</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
