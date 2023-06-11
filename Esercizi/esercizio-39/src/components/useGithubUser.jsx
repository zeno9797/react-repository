import { useState } from 'react'
import { useEffect } from 'react'

export function useGithubUser(username) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    async function fetchData({username}){
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(``)
            const data = await response.json()
            setUser(data)
        } catch (error) {
            setError(error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(username)
    }, [username])

    return {user, loading, error}

}
