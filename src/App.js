import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import KegList from "./components/KegList";
import AddKeg from "./components/AddKeg";
import KegDetail from "./components/KegDetail";

const App = () => {
  const [kegList, setKegList] = useState([{ name: "Phil", age: 43 }]);
  const [selectedKeg, setSelectedKeg] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={KegList} />
          <Route exact path="/keglist" component={KegList} kegList={kegList} />
          <Route exact path="/addkeg" component={AddKeg} />
          <Route exact path="/kegdetail" component={KegDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
