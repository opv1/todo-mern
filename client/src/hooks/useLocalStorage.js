import { useState, useCallback } from 'react'

const storageName = 'todo-mern'

export const useLocalStorage = () => {
  const [object, setObject] = useState({})

  const setItem = useCallback((jwtToken, id) => {
    const data = { token: jwtToken, userId: id }

    setObject(data)

    localStorage.setItem(storageName, JSON.stringify(data))
  }, [])

  const getItem = useCallback(() => {
    const data = localStorage.getItem(storageName)

    if (data !== null) return JSON.parse(data)
  }, [])

  const removeItem = useCallback(() => {
    localStorage.removeItem(storageName)
  }, [])

  return { object, setItem, getItem, removeItem }
}
