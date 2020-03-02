import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col">
              <h4>MEMES INC</h4>
              <ul className="list-unstyled">
                <li>9086777774</li>
                <li>Dhaka, Bangladesh</li>
                <li>Street 567</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col">
              <h4>STUFF</h4>
              <ul className="list-unstyled">
                <li>DANK MEMES</li>
                <li>GREAT STUFF</li>
                <li>BEST STUFF</li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col">
              <h4>ANOTHER COLUMN</h4>
              <ul className="list-unstyled">
                <li>DANK MEMES</li>
                <li>GREAT STUFF</li>
                <li>BEST STUFF</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy; {new Date().getFullYear()} MEMES INC | All Rights Reserved
              | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
}
