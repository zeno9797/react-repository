import React, {useState, useEffect} from 'react'


function GithubUser({username}) {
    const [users, setUsers] = useState("")

    useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://api.github.com/users/${username}")
            const data = await response.json()
            setUsers(data)
        }
        fetchData()
    }, [username])

  return (
    <div>
        <ul>
            {users.username}
        </ul>
    </div>
  )
}

export default GithubUser