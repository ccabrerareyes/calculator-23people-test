import React from "react";
import useCalculator from "../hooks/useCalculator";

export const NumberDisplay = () => {
  const { counter } = useCalculator();

  return (
    <input
      id="displayNumber"
      type="text"
      className="input is-primary is-medium"
      value={counter}
      disabled
    />
  );
};

export default NumberDisplay;
