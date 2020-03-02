import React, { Component } from "react";
// import "jquery/dist/jquery.js";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class CarouselsProducts extends Component {
  render() {
    let autoplay;
    let owlResponsive = {
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      1000: {
        items: 4
      }
    };

    return (
      <div>
        <div className="container-fluid mt-5">
          <OwlCarousel
            items={8}
            className="owl-carousel owl-theme owl-loaded"
            responsive={owlResponsive}
            loop
            nav
            margin={12}
            autoplay
          >
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/620d5b85a669d936605c52d918108ec7.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/dc11583e2d987d7e82b15053f1e479bc.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/a047ae754371453a27f8c19e56804d22.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/996ab7c8aaaeb3eb5ee635d1a8ac8c94.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/e4b70d0a0067ecac373d53658df3b5e6.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/1a14e6e2b13538a8dae86b59ee546d5d.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/p/6d7e23c2ff8b719003b27b2f0318efae.png"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/original/70415f42d70dc474d9b6837772c33629.jpg"
                }
              />
            </div>
            <div className="p-5">
              <img
                className="img"
                src={
                  "https://static-01.daraz.com.bd/original/b2f01f0f2e26aff9d89d2d4d13430db3.jpg"
                }
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
