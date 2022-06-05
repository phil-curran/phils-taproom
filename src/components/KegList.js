import KegCard from "./KegCard";
import React from "react";

const KegList = (props) => {
  console.log(props.name);
  return (
    <>
      <p>{props.name}</p>
    </>
  );
};

export default KegList;
