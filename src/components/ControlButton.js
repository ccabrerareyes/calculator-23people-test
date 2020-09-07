import React from "react";
import PropTypes from "prop-types";
import useCalculator from "../context/useCalculator";

export const ControlButton = (props) => {
  const { name, title } = props;
  const { clickOperator } = useCalculator();
  let color = "";

  switch (name) {
    case "equal":
      color = "button is-primary is-large";
      break;
    default:
      color = "button is-success is-light is-large";
      break;
  }
  return (
    <p className="control" key={title}>
      <button
        className={color}
        name={name}
        value={title}
        onClick={() => clickOperator(title)}
        type="button"
      >
        <span>{title}</span>
      </button>
    </p>
  );
};

ControlButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ControlButton;
