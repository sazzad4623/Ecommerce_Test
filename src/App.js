import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="parent">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/allProducts" component={AllProducts}></Route>
        <Route exact path="/productDetails" component={ProductDetail}></Route>
      </Switch>
      >
    </div>
  );
}

export default App;
