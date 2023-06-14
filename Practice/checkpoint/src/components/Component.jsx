import React, {useState, useEffect} from 'react'

function Component() {
    const [pokemonArr, setPokemonArr] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      async function fetchData(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await response.json()
        setPokemonArr(data.results)
      }
      fetchData()
    }, [])

    async function handleOnClick(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        const data = await response.json()
        setPokemon(data)
    }

    function handleOnChange(event) {
        setInputValue(event.target.value)
        
    }


  return (
    <div>
        <input onChange={handleOnChange} value={inputValue}/>
        <button onClick={handleOnClick}>search</button>
        <h3>hai cercato: {pokemon.name}</h3>
        {pokemonArr.map((element, index) => {
            return <div key={index}><p>{element.name}</p> <a href={element.url}>{element.url}</a></div>
        })}

    </div>
  )
}

export default Component