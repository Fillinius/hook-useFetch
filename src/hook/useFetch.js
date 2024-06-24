import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAsyncData()
  }, [])

  async function getAsyncData() {
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
      setIsLoading(false)
    } catch (error) {}
  }

  return {
    data,
    isLoading,
  }
}
