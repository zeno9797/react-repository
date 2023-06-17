import useSWR from 'swr'

const fetcher = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  )

  return {
    user: data,
    error,
    isLoading: !data && !error
  }
}

export default useGithubUser