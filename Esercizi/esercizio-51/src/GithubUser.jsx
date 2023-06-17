import React from 'react'
import useGithubUser from './useGithubUser'

function GithubUser() {
    const { users, error, isLoading, refetch} = useGithubUser()


  return (
    <div>
      <button onClick={refetch}>Refetch</button>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3> An error has occured</h3>}
        {users && <ul>
           {users.map((element, index) => {
            return <li key={index}>{element.login}</li>
           })} </ul>}
    </div>
  )
}

export default GithubUser