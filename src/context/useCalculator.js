import { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";

const useCalculator = () => {
  const [state, setState] = useContext(CalculatorContext);

  function calculate() {
    switch (state.operator) {
      case "+":
        setState((state) => ({
          ...state,
          counter:
            parseFloat(state.firstNumber) + parseFloat(state.secondNumber),
        }));
        break;
      case "-":
        setState((state) => ({
          ...state,
          counter:
            parseFloat(state.firstNumber) - parseFloat(state.secondNumber),
        }));
        break;
      case "x":
        setState((state) => ({
          ...state,
          counter:
            parseFloat(state.firstNumber) * parseFloat(state.secondNumber),
        }));
        break;
      case "/":
        if (state.secondNumber === 0) {
          setState((state) => ({ ...state, counter: "ERROR" }));
        } else if (state.firstNumber === 0) {
          setState((state) => ({ ...state, counter: 0 }));
        } else {
          setState((state) => ({
            ...state,
            counter:
              parseFloat(state.firstNumber) / parseFloat(state.secondNumber),
          }));
        }
        break;
      case "=":
        setState((state) => ({
          ...state,
          counter: parseFloat(state.secondNumber),
        }));
        break;
      default:
        break;
    }

    setState((state) => ({
      ...state,
      isNewNumber: true,
      firstNumber: state.counter,
      secondNumber: null,
      operator: null,
    }));
  }

  function clickOperator(value) {
    const number = parseFloat(state.counter);

    if (!Number.isNaN(number)) {
      if (value === "=") {
        setState((state) => ({ ...state, secondNumber: number }));
        if (state.firstNumber !== null) {
          calculate();
        }
      } else if (state.firstNumber === null && state.secondNumber === null) {
        setState((state) => ({
          ...state,
          firstNumber: number,
          operator: value,
          isNewNumber: true,
        }));
      } else if (state.firstNumber !== null && state.secondNumber === null) {
        if (state.isNewNumber) {
          setState((state) => ({ ...state, operator: value }));
        } else {
          setState((state) => ({ ...state, secondNumber: number }));
          calculate();
          setState((state) => ({ ...state, operator: value }));
        }
      }
    } else {
      setState((state) => ({ ...state, counter: "ERROR" }));
    }
  }

  function inputnumber(value) {
    if (state.isNewNumber) {
      if (value === ".") {
        if (
          parseFloat(state.counter) === 0 ||
          !String(state.counter).includes(".")
        ) {
          setState((state) => ({
            ...state,
            counter: String(0) + value,
            isNewNumber: false,
          }));
        }
      } else {
        setState((state) => ({ ...state, counter: value, isNewNumber: false }));
      }
    } else {
      switch (value) {
        case ".":
          if (
            parseFloat(state.counter) === 0 ||
            !String(state.counter).includes(".")
          ) {
            setState((state) => ({
              ...state,
              counter: String(state.counter) + value,
            }));
          }
          break;
        default:
          if (
            parseFloat(state.counter) !== 0 ||
            String(state.counter).includes(".")
          ) {
            setState((state) => ({
              ...state,
              counter: String(state.counter) + value,
            }));
          } else {
            setState((state) => ({ ...state, counter: value }));
          }
          break;
      }
    }
  }

  function clearAll() {
    setState((state) => ({
      ...state,
      counter: 0,
      firstNumber: null,
      secondNumber: null,
      operator: null,
      isNewNumber: false,
    }));
  }

  return {
    clickOperator,
    inputnumber,
    clearAll,
    counter: state.counter,
  };
};

export default useCalculator;
