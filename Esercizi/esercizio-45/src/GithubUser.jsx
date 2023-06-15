import React, {useState, useEffect} from 'react'


function GithubUser() {
    const [users, setUsers] = useState()

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://api.github.com/users/zeno9797`)
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }
        fetchData()
    }, [])

  return (
    <div>
        {users && <h2>Fullname: {users.name}</h2>}
        {users && <h2>Username: {users.login} </h2>}
        {users && <h3>My Github: <a href={"https://github.com/zeno9797"}>{users.html_url}</a> </h3>}

    </div>
  )
}

export default GithubUser