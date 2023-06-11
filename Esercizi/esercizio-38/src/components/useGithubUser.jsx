import { useState } from 'react'
import { useEffect } from 'react'

export function useGithubUser({ username }) {
    const [user, setUser] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [username])

    return {user}
}