import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = url => {
  const [data, setData] = useState()
  const token = localStorage.getItem('token')
  const auth = { headers: { auth: token } }

  useEffect(() => {
    axios
      .get(url, auth)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return data
}

export default useRequestData
