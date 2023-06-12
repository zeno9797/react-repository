import React from 'react'
import { useGithubUser } from './useGithubUser'
import { useEffect } from 'react'


function GithubUser({username}) {
    const {user, loading, error, fetchData} = useGithubUser(username)

    useEffect(() => {
      fetchData(username)
  }, [username])

    
  return (
    <div>
        {user && <h1>Fullname: {user.name}</h1>}
        {loading && <h1>Loading...</h1>}
        {error && <h1>There is been an error</h1>}

    </div>
  )
}

export default GithubUser