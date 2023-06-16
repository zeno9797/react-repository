import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function GithubUser({}) {
    const [users, setUsers] = useState()
    const {users: username = "zeno9797"} = useParams()

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUsers(data)
            
        }
        fetchData()
    }, [username])

  return (
    <div>
        {users && <h2>Fullname: {users.name}</h2>}
        {users && <h2>Username: {users.login} </h2>}
        
    </div>
  )
}

export default GithubUser