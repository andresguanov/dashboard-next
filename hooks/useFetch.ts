import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Array<Product>>([])

  const fetchData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (e) {
      console.error(`This error is${e}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return data
}

export default useFetch
