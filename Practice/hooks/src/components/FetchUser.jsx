import React, { useEffect, useState } from 'react'

function FetchUser() {
  const [arr, setArr] = useState([])
  const [inputValue, SetInputValue] = useState("")




  function handleOnChange(event) {
    const input = event.target.value
    SetInputValue(input)
    const filtredArr = arr.filter((element) => {
      return element.name.includes(input)
    })
    
    setArr(filtredArr)
    
  }

  function handleOnClick() {
    console.log(inputValue)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setArr(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div> {arr.map((element, index) => {
        return <p key={index}>{element.name}</p>
      })}</div>



      <div>
        <input onChange={handleOnChange} type="text" />
        <button onClick={handleOnClick}>Search</button>
      </div>
    </>
  )
}

export default FetchUser