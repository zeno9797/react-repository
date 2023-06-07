import { useState } from "react";

function Todolist({ fruits }) {
    const [arr, setArr] = useState({
        arr: fruits,
        inputValue: ""
    })

    function handleChange(event) {
        const input = event.target.value
        setArr((arr) => {
            return {
                inputValue: input
            }
        })

    }

    function handleClick() {
        setArr((arr) => {
             [...arr, arr.inputValue]
        })
    }


    return (
        <div>
            <ul>
                {fruits.map((element,index) => {
                    return <li key={index}> {`${element}`}</li>

                })}
            </ul>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Todolist