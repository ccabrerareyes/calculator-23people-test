import React from 'react'
import useCalculator from './useCalculator'

export const ControlButton = (props) => {
    const {name, title} = props
    const {clickButton} = useCalculator()
    var color = ''

    switch(name){
        case 'operator':
            color = 'button is-success is-light is-medium'
            break;
        case 'equal':
            color = 'button is-primary is-medium'
            break;
        case 'AC':
            color = 'button is-danger is-medium'
            break;
        default:
            color = 'button is-light is-medium'
            break
    }
    return(
        <p className="control" key={title}>
            <button
                className={color}
                name={name}
                value={title}
                onClick={() => clickButton(name, title)} >
                <span>{title}</span>
            </button>
        </p>
    )
}