// import KegCard from "./KegCard";

const KegList = (kegs) => {
  // name: "Strawberry Gose",
  //   style: "Geuze",
  //   brewery: "Ravenna Brewing Co.",
  //   description: "Lorem ipsum dolor si amet blah blah blah...",
  //   price: 5,
  //   abv: 7.5,
  //   ibu: 75,
  // },

  return (
    <>
      {kegs.map((keg) => {
        <p>{keg.name}</p>;
      })}
    </>
  );
};

export default KegList;
