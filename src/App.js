import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import KegList from "./components/KegList";
import AddKeg from "./components/AddKeg";
import KegDetail from "./components/KegDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: [
        {
          name: "Sammish Haze",
          style: "NEIPA",
          brewery: "Black Raven Brewing",
          description: "Lorem ipsum dolor si amet blah blah blah...",
          price: 5,
          abv: 5.5,
          ibu: 65,
        },
        {
          name: "The Seer",
          style: "Table Beer",
          brewery: "Holy Mountain Brewing",
          description: "Lorem ipsum dolor si amet blah blah blah...",
          price: 7,
          abv: 6.5,
          ibu: 30,
        },
        {
          name: "Strawberry Gose",
          style: "Geuze",
          brewery: "Ravenna Brewing Co.",
          description: "Lorem ipsum dolor si amet blah blah blah...",
          price: 5,
          abv: 7.5,
          ibu: 75,
        },
      ],
    };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={KegList} />
            <Route
              exact
              path="/keglist"
              component={KegList}
              kegs={this.state.kegs}
            />
            <Route exact path="/addkeg" component={AddKeg} />
            <Route exact path="/kegdetail" component={KegDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
