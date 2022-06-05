import KegCard from "./KegCard";

const KegList = (props) => {
  const { Inventory } = props;
  return (
    <div className="contentArea">
      <h1>Keg List:</h1>
      {Inventory.map((item) => (
        <KegCard
          id={item.id}
          name={item.name}
          style={item.style}
          brewery={item.brewery}
          description={item.description}
          price={item.price}
          abv={item.abv}
          ibu={item.ibu}
        />
      ))}
    </div>
  );
};

export default KegList;
