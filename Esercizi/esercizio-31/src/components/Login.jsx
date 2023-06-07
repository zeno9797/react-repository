import { useState } from "react"

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        checkbox: false,
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setForm((form) => {
            return { ...form,
            [name]: type === "checkbox" ? checked : value
            }
        })
        
    }

    function handleLogin(event){
        event.preventDefault()
        
        const username = form.username
        const password = form.password
        const checkbox = form.checkbox

        console.log(username, password, checkbox)
    }

    return (
            <form onSubmit={handleLogin}>
                <input onChange={handleChange} type="text" name="username" value={form.username}/>
                <input onChange={handleChange} type="password" name="password" value={form.password}/>
                <input onChange={handleChange} type="checkbox" name="checkbox" checked={form.checkbox}/>
                <button onClick={handleLogin}>Login</button>
            </form>
       
        
    )
}

export default Login