import { useEffect, useState } from 'react'
import axios from 'axios'

const useUpdate = url => {
  const [data, setData] = useState()
  const token = localStorage.getItem('token')
  const auth = { headers: { auth: token } }

  useEffect(() => {
    axios
      .put(url, auth)
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

export default useUpdate
