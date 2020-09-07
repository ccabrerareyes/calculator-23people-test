import React from "react";
import PropTypes from "prop-types";
import useCalculator from "../context/useCalculator";

export const NumberButton = (props) => {
  const { name, title } = props;
  const { inputnumber } = useCalculator();

  return (
    <p className="control" key={title}>
      <button
        className="button is-light is-large"
        name={name}
        value={title}
        onClick={() => inputnumber(title)}
        type="button"
      >
        <span>{title}</span>
      </button>
    </p>
  );
};

NumberButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NumberButton;
