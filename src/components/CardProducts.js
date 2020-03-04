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
  Row
} from "reactstrap";
import "./CardProducts.css";
import AllProducts from "./AllProducts";

const products = [{}, {}, {}];

function CardProducts() {
  return (
    <div>
      <Row className="mt-3">
        <Col className="p-4" lg="3" sm="6">
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
            </CardBody>
            <Link to="/allproducts">
              {" "}
              <img
                width="100%"
                src="https://static-01.daraz.com.bd/p/792aaf294f17020154793e5fc1299c50.jpg"
                alt="Card image cap"
              />{" "}
            </Link>
            <CardBody>
              <CardLink>
                <Link to="/allproducts">Card Link</Link>
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" className="p-4">
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
            </CardBody>
            <img
              width="100%"
              src="https://static-01.daraz.com.bd/p/39a4fc7de605dfdde12107940688138c.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" className="p-4">
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
            </CardBody>
            <img
              width="100%"
              src="https://static-01.daraz.com.bd/original/b1da75dd2b6197b5f2a849d8ffecded7.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" className="p-4">
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
            </CardBody>
            <img
              width="100%"
              src="https://static-01.daraz.com.bd/p/eead65d8e52c404d8b2152f504b7126e.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardProducts;
