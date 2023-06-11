import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GithubUser from './GithubUser'

function GithubUserList() {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users`)
            const data = await response.json()
            setUsers(data.map((element) => {
                return element.login
            }))
        }
        fetchData()
    }, [])

    function handleAddUser(newUser) {
        setUsers([...users, newUser])
    }


  return (
    <div>
        <ul>
            {users.map((element,index) => {
                return <li key={index}>{element}</li> 
            })}
        </ul>
        <GithubUser onAddUser={handleAddUser}/>
    </div>
  )
}

export default GithubUserList