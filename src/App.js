import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
