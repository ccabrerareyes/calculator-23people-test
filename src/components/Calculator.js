import React from 'react'
import PropTypes from 'prop-types'

import { CalculatorProvider } from './CalculatorContext'
import { ControlButton } from './ControlButton'
import { NumberDisplay } from './NumberDisplay'

export default function Calculator (props) {
    const initialValue = !isNaN(props.initialValue) ? props.initialValue : 0

    return (
        <CalculatorProvider initialValue={initialValue}>
            <div className="container">
                <div className="field has-addons">
                    <ControlButton title="AC" name="AC"/>
                    <NumberDisplay />
                </div>
                <div className="field has-addons">
                    <ControlButton title="1" name="number"/>
                    <ControlButton title="2" name="number"/>
                    <ControlButton title="3" name="number"/>
                    <ControlButton title="+" name="operator"/>
                </div>
                <div className="field has-addons">
                    <ControlButton title="4" name="number"/>
                    <ControlButton title="5" name="number"/>
                    <ControlButton title="6" name="number"/>
                    <ControlButton title="-" name="operator"/>
                </div>
                <div className="field has-addons">
                    <ControlButton title="7" name="number"/>
                    <ControlButton title="8" name="number"/>
                    <ControlButton title="9" name="number"/>
                    <ControlButton title="x" name="operator"/>
                </div>
                <div className="field has-addons">
                    <ControlButton title="0" name="number"/>
                    <ControlButton title="." name="number"/>
                    <ControlButton title="=" name="equal"/>
                    <ControlButton title="/" name="operator"/>
                </div>
            </div>
        </CalculatorProvider>
    )
}

Calculator.propTypes = {
    initialValue: PropTypes.number
}