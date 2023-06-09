import React, { useEffect, useState } from 'react'

function Title() {
    const [arr, setArr] = useState([])
    const [newArr, setNewArr] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            setArr(data)
            setNewArr(data.map((element) => {
                return element.title
            }))

        }

        fetchData()
    }, [])

    function handleOnChange(event) {
        const input = event.target.value
        setInputValue(input)
    }

    function handleAdd() {
        setNewArr([...newArr, inputValue])
    }
    

    const arr3 = newArr.filter((element) => {
        return element.length < 15
    })
    console.log(arr3)


    return (
        <>
            <div>{arr.map((element, index) => {
                return <h1 key={index}>{element.completed && element.title}</h1>
            })}</div>

            <ul>
                {newArr.map((element, index) => {
                    return <li key={index}> {element} </li>
                })}
            </ul>
            <input onChange={handleOnChange} type="text" />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {arr3.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </ul>
        </>
    )
}

export default Title