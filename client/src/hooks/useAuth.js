import { useState, useCallback } from 'react'

const storageName = 'todo-mern'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(
      storageName,
      JSON.stringify({ token: jwtToken, userId: id })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)

    localStorage.removeItem(storageName)
  }, [])

  const getStorageData = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      return data
    } else {
      return null
    }
  }, [])

  return { token, userId, login, logout, getStorageData }
}
