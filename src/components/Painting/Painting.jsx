import defaultImage from "./default.jpg";
import PropTypes from "prop-types";
import s from "./Painting.module.css";
function Painting({
  imageUrl = defaultImage,
  title,
  author,
  name = "невідомий художник",
  price,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{name}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступність: {quantity < 10 ? "закінчується" : "є в наявності"}</p>
      <button type="button">Додати в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
