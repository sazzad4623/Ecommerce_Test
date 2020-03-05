import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import CardProducts from "./components/CardProducts";
import CarouselsProducts from "./components/CarouselsProducts";
import ProductDetail from "./components/ProductDetail";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <Carousels></Carousels>
        <CardProducts />

        <CarouselsProducts />
        <CarouselsProducts />
      </div>
      //   {/* <Footer></Footer> */}
      // </div>
    );
  }
}
