import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ReactBootStrap.Navbar className="fixed-top bg navbar-dark" expand="xl">
          <ReactBootStrap.Navbar.Brand href="#home">
            React-Bootstrap
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#link">
                Link
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 mb-lg-0 mb-md-0 mb-2"
              />
              <ReactBootStrap.Button
                variant="outline-light"
                className="mb-lg-0 mb-md-0 mb-2"
              >
                <FontAwesomeIcon icon={faSearch} className="mr-1" />
                Search
              </ReactBootStrap.Button>
            </ReactBootStrap.Form>
            {/* <ReactBootStrap.Nav.Link className="text-white" href="#link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </ReactBootStrap.Nav.Link> */}
            <ReactBootStrap.Button
              variant="outline-light"
              className="ml-lg-2 ml-md-2 ml-0"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
              My Cart
            </ReactBootStrap.Button>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbar;
