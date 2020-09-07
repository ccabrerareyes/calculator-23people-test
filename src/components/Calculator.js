import React from 'react'
import PropTypes from 'prop-types'

import { CalculatorProvider } from '../context/CalculatorContext'
import { ControlButton } from './ControlButton'
import { NumberButton } from './NumberButton'
import { ACButton } from './ACButton'
import { NumberDisplay } from './NumberDisplay'

export default function Calculator (props) {
    const initialValue = !isNaN(props.initialValue) ? props.initialValue : 0

    return (
        <CalculatorProvider initialValue={initialValue}>
            <div className="container-calculator">
                <div className="column is-one-quarter">
                    <div className="field has-addons is-centered">
                        <ACButton title="AC" name="AC"/>
                        <NumberDisplay />
                    </div>
                    <div className="field has-addons is-centered">
                        <NumberButton title="1" name="number"/> 
                        <NumberButton title="2" name="number"/>
                        <NumberButton title="3" name="number"/>
                        <ControlButton title="+" name="operator"/>
                    </div>
                    <div className="field has-addons is-centered">
                        <NumberButton title="4" name="number"/>
                        <NumberButton title="5" name="number"/>
                        <NumberButton title="6" name="number"/>
                        <ControlButton title="-" name="operator"/>
                    </div>
                    <div className="field has-addons is-centered">
                        <NumberButton title="7" name="number"/>
                        <NumberButton title="8" name="number"/>
                        <NumberButton title="9" name="number"/>
                        <ControlButton title="x" name="operator"/>
                    </div>
                    <div className="field has-addons is-centered">
                        <NumberButton title="0" name="number"/>
                        <NumberButton title="." name="number"/>
                        <ControlButton title="=" name="equal"/>
                        <ControlButton title="/" name="operator"/>
                    </div>
                </div>
            </div>
        </CalculatorProvider>
    )
}

Calculator.propTypes = {
    initialValue: PropTypes.number
}