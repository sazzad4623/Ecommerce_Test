import React, { Component } from "react";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              className="d-block w-100"
              src="https://target.scene7.com/is/image/Target/GUEST_5f03cf2f-97a1-4651-88ac-4f6266ed34b0?wid=488&hei=488&fmt=pjpeg"
              alt="First slide"
            />
          </div>

          <div className="col-md-7">
            <p className="new text-center">NEW</p>
            <h2>RCA Endeavor10" HD Android Tablet</h2>
            <p>Product Code:</p>
            <p className="price">USD $15</p>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <p>
              <b>Condition:</b> New
            </p>
            <p>
              <b>Brand:</b> XYZ company
            </p>
            <label>
              <b>Quantity: </b>
            </label>
            <input className="input" type="text" value="1"></input>
            <button type="button" className="cart">
              <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
              Add To Cart
            </button>
          </div>
        </div>
        {/* <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>. */}
      </div>
    );
  }
}
