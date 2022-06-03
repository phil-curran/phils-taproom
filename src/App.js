import { Link } from "react-router-dom";
import "../node_modules/bulma/css/bulma.min.css";
import "./App.css";
import About from "./Components/About";
import AddKeg from "./Components/AddKeg";
import EditKeg from "./Components/EditKeg";
import KegDetail from "./Components/KegDetail";
import KegList from "./Components/KegList";
import Inventory from "./inventory";

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <hr></hr>
      <About />
      <hr></hr>
      <AddKeg />
      <hr></hr>
      <EditKeg />
      <hr></hr>
      <KegDetail />
      <hr></hr>
      <KegList Inventory={Inventory} />
    </div>
  );
}

export default App;
