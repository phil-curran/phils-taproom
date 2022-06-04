import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import KegList from "./components/KegList";
import Inventory from "./data/Inventory";
import Navbar from "./components/Navbar";
import AddKeg from "./components/AddKeg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inventory, setInventory] = useState();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/keglist" component={KegList} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/create" component={CreateBlog} /> */}

          <KegList inventory={Inventory} />
          <AddKeg inventory={Inventory} setInventory={setInventory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
