import useSwr from 'swr'


const fetcher = async (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

function useGithubUser() {
    const {data, error, mutate} = useSwr(`https://api.github.com/users`, fetcher)

    function refreshUsers() {
        mutate()
        
    }

    return {
        users: data,
        error,
        isLoading: !data && !error,
        refetch: refreshUsers
    }
}

export default useGithubUser