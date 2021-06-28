import PropTypes from "prop-types";
import s from "./Alert.module.css";

function Alert({ alert, type = "success" }) {
  return (
    <p role="alert" className={s[type]}>
      {alert}
    </p>
  );
}

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error"]),
};

export default Alert;
