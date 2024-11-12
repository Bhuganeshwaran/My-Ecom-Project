import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import DashBoard from "./components/DashBoard";
import MobileList from "./container/ProductList/MobileList";
import DurableList from "./container/ProductList/DurableList";
import GroceryList from "./container/ProductList/GroceryList";
import Cart from "./container/Cart";

function Router() {
  
  return (
    <BrowserRouter>
    <DashBoard/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/MobileList" element={<MobileList />} />
        <Route path="/DurableList" element={<DurableList />} />
        <Route path="/GroceryList" element={<GroceryList />} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
      <Cart />
    </BrowserRouter>
  );
}

export default Router;
