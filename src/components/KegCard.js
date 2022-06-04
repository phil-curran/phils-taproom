import PropTypes from "prop-types";

const KegCard = (props) => {
  const { id, name, style, brewery, description, price, abv, ibu } = props;
  return (
    <div className="box" id={id}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{style}</p>
      <p>{brewery}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{abv}</p>
      <p>{ibu}</p>
    </div>
  );
};

KegCard.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number,
  ibu: PropTypes.number,
};

export default KegCard;
