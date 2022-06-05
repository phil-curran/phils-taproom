import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import KegList from "./components/KegList";
import Inventory from "./data/Inventory";
import Header from "./components/Header";
import AddKeg from "./components/AddKeg";

function App() {
  const [inventory, setInventory] = useState();
  return (
    <div className="App">
      <Header />
      <KegList inventory={Inventory} />
      <AddKeg inventory={Inventory} setInventory={setInventory} />
    </div>
  );
}

export default App;
