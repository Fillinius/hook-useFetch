import { useEffect, useState } from 'react'

export default function useFetch(URL) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(URL)

  useEffect(() => {
    getAsyncData()
  }, [url])

  // useEffect(() => {
  //   if (error !== null) {
  //     setError(null)
  //   }
  // }, [error])

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

  function refetch({ params }) {
    console.log(params._limit)
    setUrl((p) => `${p}/?_limit=${params._limit}`)
    console.log(url)
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
