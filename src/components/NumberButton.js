import React from 'react'
import useCalculator from '../context/useCalculator'

export const NumberButton = (props) => {
    const { name, title } = props
    const { inputnumber } = useCalculator()

    return(
        <p className="control" key={title}>
            <button
                className='button is-light is-large'
                name={name}
                value={title}
                onClick={() => inputnumber(title)} >
                <span>{title}</span>
            </button>
        </p>
    )
}