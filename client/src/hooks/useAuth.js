import { useState, useCallback } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const { setItem, removeItem } = useLocalStorage()

  const login = useCallback(
    (jwtToken, id) => {
      setToken(jwtToken)
      setUserId(id)

      setItem(jwtToken, id)
    },
    [setItem]
  )

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)

    removeItem()
  }, [removeItem])

  return { token, userId, login, logout }
}
