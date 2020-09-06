import React, { useState } from 'react'

const CalculatorContext = React.createContext([{}, () => {}]);

const CalculatorProvider = (props) => {
    // the counter is initialized to a given value
    const [state, setState] = useState({
        counter: props.initialValue,
        firstNumber: null,
        secondNumber: null,
        operator: null
    })

    return (
        <CalculatorContext.Provider value={[state, setState]}>
            {props.children}
        </CalculatorContext.Provider>
    );
}

export { CalculatorContext, CalculatorProvider };
