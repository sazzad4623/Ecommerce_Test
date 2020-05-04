import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import CardProducts from "./components/CardProducts";
import ProductDetail from "./components/ProductDetail";
import CarouselsProduct from "./components/carouselproducts/carouselproducts";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <Carousels></Carousels>
        <CardProducts />
        <CarouselsProduct />
        <CarouselsProduct />
      </div>
      //   {/* <Footer></Footer> */}
      // </div>
    );
  }
}
