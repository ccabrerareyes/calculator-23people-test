import React from 'react'
import useCalculator from '../context/useCalculator'

export const ControlButton = (props) => {
    const { name, title } = props
    const { clickOperator } = useCalculator()
    var color = ''

    switch(name){
        case 'equal':
            color = 'button is-primary is-large'
            break;
        default:
            color = 'button is-success is-light is-large'
            break
    }
    return(
        <p className="control" key={title}>
            <button
                className={color}
                name={name}
                value={title}
                onClick={() => clickOperator(title)} >
                <span>{title}</span>
            </button>
        </p>
    )
}