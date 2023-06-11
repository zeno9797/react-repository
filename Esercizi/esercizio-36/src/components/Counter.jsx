import React, { useState } from 'react'

function useCounter(initValue = 0){
    const [counter, setCounter] = useState(initValue)

    function handleIncrement() {
        setCounter((c) => {
            return c + 1
        })
    }

    function handleDecrement() {
        setCounter((c) => {
            return c - 1
        })
    }

    function handleReset(){
        setCounter(initValue)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    }
}

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