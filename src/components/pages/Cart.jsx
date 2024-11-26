import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import Spinner from "../Spinner";
import EmptyCart from "../EmptyCart";
import { ShopContext } from "../context/ShopContext";
import items from "../../../db.json"

const CartPage = () => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartItems } = useContext(ShopContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setDisplayedItems(items);
      } catch (error) {
        console.log("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Check if cartItems is null, empty, or has all quantities set to zero
  const isCartEmpty =
    !cartItems || Object.values(cartItems).every((qty) => qty === 0);

  return loading ? (
    <Spinner />
  ) : isCartEmpty ? (
    <EmptyCart />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Your Cart
      </h1>

      <div className="flex flex-col space-y-4">
        {/* Render only items with non-zero quantities */}
        {displayedItems.map((displayedItem) =>
          cartItems[displayedItem.id] !== 0 ? (
            <CartItem
              key={displayedItem.id}
              item={displayedItem}
              quantity={cartItems[displayedItem.id]}
            />
          ) : null
        )}
      </div>

      {/* Add Total Price and Checkout Button Here */}
      <div className="flex justify-between items-center mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold">
          Total: $
          {displayedItems
            .reduce(
              (total, displayedItem) =>
                total +
                (cartItems[displayedItem.id] || 0) * displayedItem.price,
              0
            )
            .toFixed(2)}
        </h2>
        {/* <Link
          to="/checkout"
          className="px-6 py-2 bg-dark-blue-700 text-white rounded-lg hover:bg-dark-blue-900 transition-all ease-in-out"
        >
          Checkout
        </Link> */}
      </div>
    </div>
  );
};

export default CartPage;
