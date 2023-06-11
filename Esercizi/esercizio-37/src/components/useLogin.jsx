import { useState } from 'react'


export function useLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(event){
        setUsername(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function handleOnClick(event){
        event.preventDefault()
        console.log(username, password)
        setUsername("")
        setPassword("")
    }
    
    return {
        username: username,
        password: password,
        inputUsername: handleUsername,
        inputPassword: handlePassword,
        saveData: handleOnClick,
    }
}
