import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import ProductDesc from "./pages/ProductDesc";
import Cart from "./pages/cart";

import Login from "./pages/Login"
import Register from "./pages/Register"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product/:id" element={<ProductDesc />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
