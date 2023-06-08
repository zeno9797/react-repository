import { useState } from "react";

function Todolist({ fruits }) {
    const [arr, setArr] = useState(fruits)
    const [inputValue, setInput] = useState("")

    function handleChange(event) {
        const input = event.target.value
        setInput(input)

    }

    function handleClick() {
        setArr([...arr, inputValue]
        )
    }


    return (
        <div>
            <ul>
                {arr.map((element,index) => {
                    return <li key={index}> {`${element}`}</li>

                })}
            </ul>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Todolist