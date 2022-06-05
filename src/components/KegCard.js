import { useState } from "react";
import PropTypes from "prop-types";
import placeholder from "../images/placeholder.png";

const KegCard = (props) => {
  const {
    id,
    name,
    style,
    brewery,
    description,
    price,
    abv,
    ibu,
    volume,
    deleteKeg,
  } = props;

  console.log(deleteKeg);

  const [kegLevel, setKegLevel] = useState(volume);

  const handleDetailsBtn = () => {
    console.log("clicked details button");
  };

  const handleSalesBtn = () => {
    setKegLevel(kegLevel - 2);
  };

  let progressBarColor;
  let progressBarMessage;

  if (kegLevel >= 62) {
    progressBarColor = "progress  is-primary";
    progressBarMessage = "Plenty Left!";
  } else if (kegLevel >= 20) {
    progressBarColor = "progress is-warning";
    progressBarMessage = "Getting Low";
  } else if (kegLevel > 0) {
    progressBarColor = "progress is-danger";
    progressBarMessage = "Almost Gone!";
  } else if (kegLevel <= 0) {
    progressBarMessage = "Is Kaput!";
  }

  let progressBar;

  kegLevel > 0
    ? (progressBar = (
        <progress className={progressBarColor} value={kegLevel} max="124">
          {volume}
        </progress>
      ))
    : (progressBar = null);

  let buttonBlock;

  progressBar !== null
    ? (buttonBlock = (
        <div className="row">
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button is-danger is-outlined"
                onClick={deleteKeg}
              >
                Delete
              </button>
            </p>
            <p className="control">
              <button
                className="button is-info is-outlined"
                onClick={handleDetailsBtn}
              >
                Details
              </button>
            </p>
            <p className="control">
              <button
                className="button is-success is-outlined"
                onClick={handleSalesBtn}
              >
                Sale
              </button>
            </p>
          </div>
        </div>
      ))
    : (buttonBlock = (
        <div className="row">
          <div className="field is-grouped">
            <p className="control">
              <p className="emptyKeg">
                <button
                  className="button is-black is-outlined is-fullwidth emptyKeg"
                  onClick={deleteKeg}
                >
                  Delete Empty Keg
                </button>
              </p>
            </p>
          </div>
        </div>
      ));

  return (
    <div className="box" key={id}>
      <p className="levelMessage">{progressBarMessage}</p>
      {progressBar}
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128 is-a-little-rounded">
            <img src={placeholder} alt="" />
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
            {buttonBlock}
          </div>
        </div>
      </article>
    </div>
  );
};

KegCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string,
  ibu: PropTypes.string,
};

export default KegCard;
