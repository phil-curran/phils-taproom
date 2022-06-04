import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import KegList from "./components/KegList";
// import Inventory from "./data/Inventory";
import Navbar from "./components/Navbar";
import AddKeg from "./components/AddKeg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inventory, setInventory] = useState([]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={KegList} /> */}
          {/* should have a default "/" route here */}
          <Route
            exact
            path="/keglist"
            component={KegList}
            inventory={inventory}
            setInventory={setInventory}
          />
          <Route
            exact
            path="/addkeg"
            component={AddKeg}
            inventory={inventory}
            setInventory={setInventory}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
