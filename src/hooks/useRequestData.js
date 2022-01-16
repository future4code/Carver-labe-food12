import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState)
  const token = localStorage.getItem('token')
  const auth = { headers: { auth: token } }

  useEffect(() => {
    axios.get(url, auth)
      .then(response => {
        setData(response.data.orders)
      })
      .catch(error => {
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return data
}

export default useRequestData