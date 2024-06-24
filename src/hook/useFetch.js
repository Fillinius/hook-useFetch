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
      setIsLoading(true)
    }
  }, [error])

  async function getAsyncData() {
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
      setIsLoading(false)
    } catch (error) {
      console.log('err', error)
      setError(true)
    }
  }
  // function getAsyncData() {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false))
  // }

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
