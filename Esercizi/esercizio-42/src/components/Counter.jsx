import React, { useState } from 'react'
import useCounter from './useCounter'


function Counter({ initValue = 0 }) {
   const {counter, onIncrement, onDecrement, onReset} = useCounter(initValue)

    return (
        <div>
            <h1>
                Count: {counter}
            </h1>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button> <br />
            <button onClick={onReset}>Reset to 0</button>
        </div>
    )
}

export default Counter