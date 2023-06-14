import { useState, useCallback } from "react"


function useCounter(initValue = 0) {
    const [counter, setCounter] = useState(initValue)

    const handleIncrement = useCallback((function handleIncrement() {
        setCounter((c) => {
            return c + 1
        })
    }), [])

    const handleDecrement = useCallback((function handleDecrement() {
        setCounter((c) => {
            return c - 1
        })
    }), [])

    const handleReset = useCallback((function handleReset() {
        setCounter(initValue)
    }
    ), [initValue])


    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    }
}

export default useCounter