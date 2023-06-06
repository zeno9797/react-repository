import { useState } from "react";

function ClickCounter({value = 0}) {
    const[counter, setCounter] = useState(value)

    function handleIncrement() {
        setCounter((c) => c + 1)
    }

    return(
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default ClickCounter;