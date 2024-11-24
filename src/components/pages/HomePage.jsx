import React from "react";
import Hero from "../Hero";
import Menu_listings from "../Menu_listings";

const HomePage = () => {
  return (
    <section className="bg-gray-5100">
      <Hero />
      <Menu_listings  isHome={true} />
    </section>
  );
};

export default HomePage;
