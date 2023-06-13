import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Component() {
    const [arr, setArr] = useState([])
    const [inputValue, setInputValue] = useState()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
            const data = await response.json()
            setArr(data.results)
        }
        fetchData()
    }, [])


    function handleOnChange(event) {
        const input = event.target.value
        setInputValue(input)
    }

    
    async function handleOnClick() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        const data = await response.json()
        console.log(data)
        setPokemon(data.name)
    }

    
    return (
        <div>
            <input value={inputValue} onChange={handleOnChange} />
            <button onClick={handleOnClick}>Search</button>
            <h2>hai cercato: {pokemon}</h2>
            <div>{arr.map((element, index) => {
                return <div key={index}> <p>{element.name}</p> <p>{element.url}</p> </div>
            })}</div>
        </div>
    )
    

}


export default Component