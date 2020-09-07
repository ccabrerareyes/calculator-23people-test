import React from "react";
import PropTypes from "prop-types";
import useCalculator from "../hooks/useCalculator";

export const ACButton = (props) => {
  const { name, title } = props;
  const { clearAll } = useCalculator();
  return (
    <p className="control" key={title}>
      <button
        className="button is-danger is-medium"
        name={name}
        value={title}
        onClick={() => clearAll()}
        type="button"
      >
        <span>{title}</span>
      </button>
    </p>
  );
};

ACButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ACButton;
