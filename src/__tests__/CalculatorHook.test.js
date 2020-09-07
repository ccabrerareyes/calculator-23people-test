import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { CalculatorProvider } from "../context/CalculatorContext";
import useCalculator from "../hooks/useCalculator";

describe("Test calculation custom hook", () => {
  test("should clear all values of state", () => {
    const wrapper = ({ children, value }) => (
      <CalculatorProvider initialValue={value}>{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
      initialValue: 0,
    });
    act(() => {
      result.current.clearAll();
    });
    expect(result.current.counter).toBe("0");
    expect(result.current.counter).not.toBe(null);
    expect(result.current.firstNumber).toBe(null);
    expect(result.current.secondNumber).toBe(null);
    expect(result.current.operator).toBe(null);
    expect(result.current.isNewNumber).toBe(false);
  });

  test("should store the number input in state counter", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });
    act(() => {
      result.current.inputnumber(1);
    });
    expect(result.current.counter).toBe("1");
    expect(result.current.counter).not.toBe(1);
  });

  test("should clear all states and then two digits are entered to create a decimal number", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });
    act(() => {
      result.current.clearAll();
    });
    act(() => {
      result.current.inputnumber(1);
    });
    act(() => {
      result.current.inputnumber(".");
    });
    act(() => {
      result.current.inputnumber(1);
    });
    expect(result.current.counter).toBe("1.1");
    expect(result.current.counter).not.toBe(1.1);
  });

  test("should clear all states and then a number is entered", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.clearAll();
    });
    act(() => {
      result.current.inputnumber(1);
    });
    expect(result.current.counter).toBe("1");
    expect(result.current.counter).not.toBe(1);
  });

  test("should clear enter two digits to create a number", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.inputnumber(1);
    });
    act(() => {
      result.current.inputnumber(1);
    });
    expect(result.current.counter).toBe("11");
    expect(result.current.counter).not.toBe(11);
  });

  test("should add a 0 at the beginning when no number is entered before the dot", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.inputnumber(".");
    });
    expect(result.current.counter).toBe("0.");
  });

  test("should keep the number displayed on the screen when entering only one operator", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.clickOperator("-");
    });
    expect(result.current.counter).toBe("0");
  });

  test("should calculate the result when press equal and the numbers were already entered ", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });
    act(() => {
      result.current.inputnumber(1);
    });
    act(() => {
      result.current.clickOperator("+");
    });
    act(() => {
      result.current.inputnumber(3);
    });
    act(() => {
      result.current.clickOperator("=");
    });
    expect(result.current.counter).toBe("4");
  });

  test("should return Infinity when a number is divided by 0", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });
    act(() => {
      result.current.inputnumber(3);
    });
    act(() => {
      result.current.clickOperator("/");
    });
    act(() => {
      result.current.inputnumber(0);
    });
    act(() => {
      result.current.clickOperator("=");
    });
    expect(result.current.counter).toBe("Infinity");
  });

  test("should return 0 when 0 is divided by a number", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.inputnumber(0);
    });
    act(() => {
      result.current.clickOperator("/");
    });
    act(() => {
      result.current.inputnumber(5);
    });
    act(() => {
      result.current.clickOperator("=");
    });
    expect(result.current.counter).toBe("0");
  });

  test("should calculate the result when an operator is pressed instead equal", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.inputnumber(3);
    });
    act(() => {
      result.current.clickOperator("x");
    });
    act(() => {
      result.current.inputnumber(5);
    });
    act(() => {
      result.current.clickOperator("+");
    });
    expect(result.current.counter).toBe("15");
  });

  test("should calculate the result before enter a third number and second operator", () => {
    const wrapper = ({ children }) => (
      <CalculatorProvider initialValue="0">{children}</CalculatorProvider>
    );
    const { result } = renderHook(() => useCalculator(), {
      wrapper,
    });

    act(() => {
      result.current.inputnumber(3);
    });
    act(() => {
      result.current.clickOperator("x");
    });
    act(() => {
      result.current.inputnumber(5);
    });
    act(() => {
      result.current.clickOperator("+");
    });

    expect(result.current.counter).toBe("15");

    act(() => {
      result.current.inputnumber(2);
    });
    act(() => {
      result.current.clickOperator("=");
    });
    expect(result.current.counter).toBe("17");
  });
});
