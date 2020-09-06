import { useContext } from 'react'
import { CalculatorContext } from './CalculatorContext'

const useCalculator = initialValue => {
    const [state, setState] = useContext(CalculatorContext)
    
    function clickButton(name, value){
        console.log("clickButton")
        console.log(name, value, state.counter)
        // setState(state => ({ ...state, counter: value }))
        setState({counter: value})
    }

    return {
        clickButton,
        counter: state.counter,
    }
}

export default useCalculator