import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import KegList from "./components/KegList";
// import Inventory from "./data/Inventory";
import Navbar from "./components/Navbar";
import AddKeg from "./components/AddKeg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
    };
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={KegList}
            inventory={this.state.inventory}
          />
          <Route
            exact
            path="/addkeg"
            component={AddKeg}
            inventory={this.state.inventory}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
