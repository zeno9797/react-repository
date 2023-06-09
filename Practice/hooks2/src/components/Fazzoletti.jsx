import React, { useEffect, useState } from 'react'

function Fazzoletti() {
    const [arr, setArr] = useState([])



    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        setArr(data)
    }
    

    useEffect(() => {
        fetchData
    }, [])



    return (
        <>
            <ul>{arr.map((element, index) => {
                return <li key={index}>{element.title}</li>
            })}
            </ul>
            <button onClick={fetchData} >we bucchì</button>
        </>
    )
}

export default Fazzoletti