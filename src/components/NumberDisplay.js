import React from "react";
import useCalculator from "../context/useCalculator";

export const NumberDisplay = () => {
  const { counter } = useCalculator();

  return (
    <input
      type="text"
      className="input is-primary is-medium"
      value={counter}
      disabled
    />
  );
};

export default NumberDisplay;
