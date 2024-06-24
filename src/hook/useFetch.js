import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAsyncData()
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  async function getAsyncData() {
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
      setIsLoading(false)
    } catch (error) {
      setError(false)
    }
  }

  return {
    data,
    isLoading,
    error,
  }
}
