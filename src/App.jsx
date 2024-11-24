import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/Layout/MainLayout";
import NotFound from "./components/pages/NotFound";
import ViewAllPage from "./components/pages/ViewAllPage";
import ViewSpecificPage from "./components/pages/ViewSpecificPage";
import ShopContextProvider from "./components/context/ShopContext";
import CartPage from "./components/pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<ViewAllPage />} />
      <Route path="/products/:id" element={<ViewSpecificPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />{" "}
    </ShopContextProvider>
  );
};

export default App;
