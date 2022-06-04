import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KegList from "./KegList";
import AddKeg from "./AddKeg";

const KegManager = () => {
  return (
    <>
      <KegList />
      <AddKeg />
    </>
  );
};

export default KegManager;
