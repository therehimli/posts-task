import { useEffect, useState } from 'react'

export function useFetch<T>(
  url: string,
  query: string,
  activeFavorite: boolean
) {
  const [posts, setPosts] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url + `?q=${query}`)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()

        setPosts(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [query, activeFavorite])

  return { posts, error, loading }
}
