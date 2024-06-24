import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  return {
    data,
  }
}
