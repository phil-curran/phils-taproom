import { v4 as uuidv4 } from "uuid";

const AddKeg = (props) => {
  const { inventory, setInventory } = props;

  const handleCancelBtn = (e) => {
    e.preventDefault();
    console.log("clicked cancel btn");
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const newKeg = {
      id: uuidv4(),
      name: e.target.name.value,
      style: e.target.style.value,
      brewery: e.target.brewery.value,
      description: e.target.description.value,
      price: e.target.price.value,
      abv: e.target.abv.value,
      ibu: e.target.ibu.value,
      volume: 124,
    };
    setInventory(inventory.push(newKeg));
  };

  return (
    <div className="contentArea">
      <section className="section">
        <div className="container">
          <div className="panel is-info">
            <p className="panel-heading has-text-centered">
              <strong>Add Keg</strong>
            </p>
            <form onSubmit={handleSubmitBtn}>
              <div className="container">
                <div className="column">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Product Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label">Style</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="style"
                        placeholder="Product Style"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label">Brewery</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="brewery"
                        placeholder="Brewery Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        type="text"
                        name="description"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="price"
                            placeholder="$"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">ABV</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="abv"
                            placeholder="%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">IBU</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="ibu"
                            placeholder="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="control">
                        <button
                          className="button is-danger is-outlined is-fullwidth"
                          onClick={handleCancelBtn}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div className="column">
                      <div className="control">
                        <button className="button is-success is-outlined is-fullwidth">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddKeg;
