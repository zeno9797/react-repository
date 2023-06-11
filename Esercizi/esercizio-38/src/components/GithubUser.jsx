import React from 'react'
import { useGithubUser } from './useGithubUser'

function GithubUser({ username }) {
    const {user} = useGithubUser({ username })

    return (
        <div>
            <h1> Fullname: {user && user.name} </h1>
            <h1> Username: {user && user.login} </h1>
        </div>
    )
}

export default GithubUser