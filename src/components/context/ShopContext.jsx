import React, { createContext, useState, useEffect } from "react";
import Spinner from "../Spinner";
import items from "../../../db.json"

export const ShopContext = createContext(null);

const getDefaultCart = async () => {
  try {
    let cart = {};
    for (let i = 1; i < items.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  } catch (error) {
    console.log("An error occurred in the shopcontext", error);
  }
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const initializeCart = async () => {
      const defaultCart = await getDefaultCart(); // Fetch the cart items
      setCartItems(defaultCart); // Set the cart items once fetched
      setLoading(false); // Set loading to false once data is ready
    };

    initializeCart(); // Call the function to initialize the cart
  }, []); // Empty dependency array means this runs once when the component mounts

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) + 1, // Safe fallback to 0 if the item doesn't exist
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) - 1, // Safe fallback to 0 if the item doesn't exist
    }));
  };

  const updateItemCount = ((newAmount, itemId) => {
    setCartItems((prevState) => ({ ...prevState, [itemId]: newAmount }))
  })

  // If still loading, render a loading state (like a spinner)
  if (loading) {
    return <Spinner />;
  }
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
