import React, {useState} from 'react'

function GithubUser({onAddUser}) {
    const [inputValue, setInputValue] = useState()

    function handleOnChange(event){
        const input = event.target.value
        setInputValue(input)
    }

    function handleOnClick() {
        onAddUser(inputValue)
    }

  return (
    <div>
        <input onChange={handleOnChange} type="text" placeholder='Enter your username'/>
        <button onClick={handleOnClick}>Click to add</button>
    </div>
  )
}

export default GithubUser