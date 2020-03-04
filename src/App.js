import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/allProducts" component={AllProducts}></Route>
        <Route exact path="/productDetails" component={ProductDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
