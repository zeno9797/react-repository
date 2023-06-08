import { useState } from "react";
import { useEffect } from "react";

export function ClickCounter({ inputValue = 0 }) {
    
    const [count, setCount] = useState(inputValue)

    useEffect(() => {
        console.log(count)
    }, [count])

    function handleOnClick(){
        setCount((c) => {
            return c + 1
        } )
    }



    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={handleOnClick}>+</button>
        </div>
    )
}