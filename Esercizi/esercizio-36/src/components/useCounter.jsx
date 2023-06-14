import { useState } from "react"

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

export default useCounter