import KegCard from "./KegCard";

const KegList = (props) => {
  const { inventory, setInventory, deleteKeg } = props;

  let pageContent;

  inventory.length === 0
    ? (pageContent = (
        <div className="column">
          <p className="has-text-centered">No Kegs in Inventory!</p>
          <p className="has-text-centered">ADD SOME</p>
        </div>
      ))
    : (pageContent = inventory.map((item, index) => {
        return (
          <KegCard
            key={index}
            {...item}
            setInventory={setInventory}
            deleteKeg={deleteKeg}
          />
        );
      }));

  return (
    <section className="section">
      <div className="container">
        <div className="panel is-info">
          <p className="panel-heading has-text-centered">
            <strong>Keg List</strong>
          </p>
          <div className="container">
            <div className="column">
              {pageContent}
              <button className="button is-link is-outlined is-fullwidth">
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KegList;
