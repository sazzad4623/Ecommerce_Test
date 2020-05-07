import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from "reactstrap";
import "./CardProducts.css";
import AllProducts from "./AllProducts";

class CardProducts extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sections: [
        {
          title: "hat",
          imageUrl:
            "https://static-01.daraz.com.bd/p/0aa816c14e4af8017cd76c962ec8b304.jpg",
          id: 1,
          productName: "che guevara cap",
          price: "$200",
          linkUrl: "hats",
        },

        {
          title: "jackets",
          imageUrl:
            "https://static-01.daraz.com.bd/p/b1f285cfe5186b8727ade299a160694a.jpg",
          id: 2,
          productName: "random blue jacket",
          price: "$700",
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://static-01.daraz.com.bd/p/5392e01a9f9ee84b7a847256b6f416f9.jpg",
          id: 3,
          productName: "white sneakers",
          price: "$500",
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl:
            "https://static-01.daraz.com.bd/p/2aadce093265bd3822b1b6af4b992a30.jpg_200x200q75-product.jpg_.webp",
          size: "large",
          id: 4,
          productName: "yellow three piece",
          price: "$1000",
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl:
            "https://static-01.daraz.com.bd/original/c7d9f21176d901ae1065741d2d363fad.jpg",
          size: "large",

          id: 5,
          productName: "white hoodie",
          price: "$500",
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    const mystyle = {
      color: "#000000",
    };
    return (
      <div>
        <Row className="m-3 ">
          {this.state.sections.map(
            ({ title, imageUrl, id, size, productName, price }) => (
              <Col className="p-2" lg="3" sm="6">
                <Card className="card">
                  <img width="100%" src={imageUrl} alt="Card image cap" />{" "}
                  <div>
                    <CardText className="ml-2 font-weight-light">
                      {title}
                    </CardText>
                  </div>
                  <Link style={mystyle}>
                    <div>
                      <CardText className="ml-2 font-weight-light">
                        {productName}
                      </CardText>
                    </div>{" "}
                  </Link>
                  <Link style={mystyle}>
                    {" "}
                    <diV className="pt-2">
                      <CardText className="ml-2 font-weight-bold">
                        {price}
                      </CardText>
                    </diV>
                  </Link>
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    );
  }
}

export default CardProducts;
