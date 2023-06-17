import React from 'react'
import useGithubUser from './useGithubUser'
import { useParams } from 'react-router-dom'

function GithubUser() {
  const { username } = useParams()
  const { user, error, isLoading } = useGithubUser(username)

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {user && (
        <h1>nome: {user.name}</h1>
      )}
    </div>
  )
}

export default GithubUser