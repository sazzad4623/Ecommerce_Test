import React, { Component } from "react";
// import "jquery/dist/jquery.js";
import OwlCarousel from "react-owl-carousel";
import "./CarouselProducts.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Switch, Route, Link } from "react-router-dom";

export default class CarouselsProducts extends Component {
  constructor(props) {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://static-01.daraz.com.bd/p/0aa816c14e4af8017cd76c962ec8b304.jpg",
          id: 1,
          linkUrl: "hats",
        },

        {
          title: "jackets",
          imageUrl:
            "https://static-01.daraz.com.bd/p/b1f285cfe5186b8727ade299a160694a.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://static-01.daraz.com.bd/p/5392e01a9f9ee84b7a847256b6f416f9.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl:
            "https://static-01.daraz.com.bd/p/2aadce093265bd3822b1b6af4b992a30.jpg_200x200q75-product.jpg_.webp",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl:
            "https://static-01.daraz.com.bd/original/c7d9f21176d901ae1065741d2d363fad.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    let autoplay;
    let owlResponsive = {
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },
      // breakpoint from 768 up
      1000: {
        items: 4,
      },
    };

    return (
      <div className="container-fluid mt-5">
        {" "}
        <OwlCarousel
          items={8}
          className="owl-carousel owl-theme owl-loaded"
          responsive={owlResponsive}
          loop
          nav
          margin={12}
          autoplay
          // key={id}
          // title={title}
          // imageUrl={imageUrl}
        >
          {this.state.sections.map(({ title, imageUrl, id, size }) => (
            <div className="p-5">
              <div className="img-container">
                <img className="img" src={imageUrl} />
              </div>

              <h1>{title}</h1>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}
