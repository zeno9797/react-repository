import { useState } from 'react'


export function useGithubUser({username}) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    async function fetchData(username){
        setLoading(true)
        setError(null)
    
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            console.log(data);
            setUser(data)
        } catch (error) {
            setError(error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    return {user, loading, error, fetchData}

}
