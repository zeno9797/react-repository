import React from 'react'
import { useLogin } from './useLogin'

function Login() {
    const {username, password, inputUsername, inputPassword, saveData} = useLogin()
   
  return (
    <div>       
        <h1>Form</h1>

        <form>
            <input onChange={inputUsername} type="text" placeholder='Username' value={username}/>
            <input onChange={inputPassword} type="password" placeholder='Password' value={password}/>
            <button onClick={saveData}>Login</button>
        </form>

    </div>
  )
}

export default Login