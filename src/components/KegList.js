import KegCard from "./KegCard";
import React from "react";

const KegList = (props) => {
  const { title, age } = props;
  console.log(title);
  return (
    <>
      <p>{props.name}</p>
    </>
  );
};

export default KegList;
