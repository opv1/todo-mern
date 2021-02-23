import { useState, useCallback, useEffect } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [ready, setReady] = useState(false)

  const { setStorage, getStorage, removeStorage } = useLocalStorage()

  const login = useCallback(
    (jwtToken, id) => {
      setToken(jwtToken)
      setUserId(id)
      setStorage({ token: jwtToken, userId: id })
    },
    [setStorage]
  )

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    removeStorage()
  }, [removeStorage])

  useEffect(() => {
    const data = getStorage()

    if (data && data.token) {
      setStorage({ token: data.token, userId: data.userId })
      login(data.token, data.userId)
    }

    setReady(true)
    // eslint-disable-next-line
  }, [login])

  return { token, userId, ready, login, logout }
}
