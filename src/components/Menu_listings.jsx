import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import items from "../../db.json";

const Menu_listings = ({ isHome = false }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = isHome ? items.slice(0, 4) : items;
        setDisplayedItems(data)
      } catch (error) {
        console.log("An error occurred while fetching data:", error)
      }finally {
        setLoading(false)
      }
    };

    fetchItems();
  }, [isHome]);

  return (
    <section className="px-10 py-10 bg-gray-100">
      {isHome ? (
        <div className="w-full sm:flex sm:justify-between items-center mb-5 flex-wrap xs:grid xs:justify-center">
          <h3 className="font-semibold text-2xl">
            Best Seller{" "}
            <span className="text-green-500 inner-text-shadow">Products</span>
          </h3>
          <Link
            to="/products"
            className="text-sm font-semibold px-8 py-3 bg-green-500 rounded-full text-white hover:text-green-500 hover:bg-dark-blue-700 xs:text-center"
          >
            View all Products
          </Link>
        </div>
      ) : (
        <h3 className="font-semibold text-2xl text-center mb-5 text-dark-blue-700">
          Browse
          <span className="text-green-500 inner-text-shadow"> Products</span>
        </h3>
      )}

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-10 mb-20">
          {displayedItems.length > 0 ? (
            displayedItems.map((displayedItem, index) => {
              return (
                <ProductList
                  key={index}
                  displayedItem={displayedItem}
                />
              );
            })
          ) : (
            <div className="w-full text-center m-auto">
              <p> No products available at the moment.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Menu_listings;
