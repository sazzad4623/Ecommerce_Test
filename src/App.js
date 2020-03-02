import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import CardProducts from "./components/CardProducts";
import CarouselsProducts from "./components/CarouselsProducts";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar></Navbar>
        <Carousels></Carousels>
        <CardProducts />
        <CarouselsProducts />
        <CarouselsProducts />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
