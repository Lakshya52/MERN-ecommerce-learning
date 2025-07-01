import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import ProductDesc from "./pages/ProductDesc";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product/:id" element={<ProductDesc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
