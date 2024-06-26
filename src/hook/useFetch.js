import { useEffect, useState } from 'react'

export default function useFetch(URL) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(URL)

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
        .then((response) => {
          if (!response.ok) {
            throw new Error('Ошибка запроса')
          }
          return response.json()
        })
        .then((data) => setData(data))
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
