import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import KegList from "./components/KegList";
import Inventory from "./data/Inventory";
import Header from "./components/Header";
import AddKeg from "./components/AddKeg";

function App() {
  const data = [];
  const [inventory, setInventory] = useState(data);

  console.log(inventory);

  const addKeg = (newKeg) => {
    setInventory([...inventory, newKeg]);
  };

  return (
    <div className="App">
      <Header />
      <KegList inventory={Inventory} setInventory={setInventory} />
      <AddKeg
        inventory={Inventory}
        setInventory={setInventory}
        addKeg={addKeg}
      />
    </div>
  );
}

export default App;
