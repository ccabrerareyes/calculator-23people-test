import React from 'react'
import useCalculator from '../context/useCalculator'

export const ACButton = (props) => {
    const { name, title } = props
    const { clearAll } = useCalculator()
    return(
        <p className="control" key={title}>
            <button
                className='button is-danger is-medium'
                name={name}
                value={title}
                onClick={() => clearAll() } >
                <span>{title}</span>
            </button>
        </p>
    )
}