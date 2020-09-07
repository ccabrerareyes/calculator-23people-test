import React, { useState } from "react";
import PropTypes from "prop-types";

const CalculatorContext = React.createContext([{}, () => {}]);

const CalculatorProvider = (props) => {
  const { initialValue, children } = props;
  // the counter is initialized to a given value
  const [state, setState] = useState({
    counter: initialValue,
    firstNumber: null,
    secondNumber: null,
    isNewNumber: false,
    operator: null,
  });

  return (
    <CalculatorContext.Provider value={[state, setState]}>
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.defaultValue = {
  initialValue: "0",
};

CalculatorProvider.propTypes = {
  initialValue: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { CalculatorContext, CalculatorProvider };
