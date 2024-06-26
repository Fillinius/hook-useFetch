import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
}
type FetchError = Error | null | boolean

export default function useFetch(URL: string) {
  const [data, setData] = useState<Post[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<FetchError>(null)
  const [url, setUrl] = useState<string>(URL)

  useEffect(() => {
    getAsyncData()
  }, [url])

  useEffect(() => {
    if (error !== null) {
      setError(true)
      setIsLoading(false)
    }
  }, [error])

  async function getAsyncData() {
    try {
      await fetch(url)
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error('Ошибка запроса')
          }
          return response.json()
        })
        .then((data: Post[]) => setData(data))
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  function refetch({ params }) {
    setUrl((p) => `${p}/?_limit=${params._limit}`)
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
