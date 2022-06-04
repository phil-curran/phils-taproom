import { useState } from "react";
import PropTypes from "prop-types";

const KegCard = (props) => {
  const { id, name, style, brewery, description, price, abv, ibu, volume } =
    props;

  const [kegLevel, setKegLevel] = useState(volume);

  const handleDetailsBtn = () => {
    console.log("clicked details button");
  };

  const handleSalesBtn = () => {
    setKegLevel(kegLevel - 5);
  };

  return (
    <div className="box">
      <progress className="progress is-primary" value={kegLevel} max="124">
        {volume}
      </progress>
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128 is-a-little-rounded">
            <img src="" alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <div className="row">
              <div className="columns">
                <div className="column is-three-fifths">
                  <p>
                    <strong>
                      {name} - {style}
                    </strong>
                    <br></br>
                    <small>{brewery}</small>
                  </p>
                </div>
                <div className="is-two-fifths">
                  <div className="field is-grouped is-grouped-multiline AbvIbu">
                    <div className="control">
                      <div className="tags has-addons">
                        <span className="tag is-dark">ABV:</span>
                        <span className="tag is-info">{abv}%</span>
                      </div>
                    </div>
                    <div className="control">
                      <div className="tags has-addons">
                        <span className="tag is-dark">IBUs:</span>
                        <span className="tag is-success">{ibu}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p></p>
            <div className="row">
              <p>Price: ${price} / pint</p>
            </div>
            <div className="row">
              <p>{description}</p>
            </div>
            <p></p>
            <div className="row">
              <div className="field is-grouped">
                <p className="control">
                  <button
                    className="button is-small is-link"
                    onClick={handleDetailsBtn}
                  >
                    Details
                  </button>
                </p>
                <p className="control">
                  <button
                    className="button is-small is-danger"
                    onClick={handleSalesBtn}
                  >
                    Sale
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

KegCard.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string,
  ibu: PropTypes.string,
};

export default KegCard;
