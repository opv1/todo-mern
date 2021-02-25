import { useState, useCallback } from 'react'

const nameStorage = 'todo-mern'

export const useLocalStorage = () => {
  const [object, setObject] = useState({
    token: null,
    userId: null,
  })

  const setStorage = useCallback((data) => {
    setObject(data)

    localStorage.setItem(nameStorage, JSON.stringify(data))
  }, [])

  const getStorage = useCallback(() => {
    const data = localStorage.getItem(nameStorage)

    if (data !== null) return JSON.parse(data)
  }, [])

  const removeStorage = useCallback(() => {
    localStorage.removeItem(nameStorage)
  }, [])

  return { object, setStorage, getStorage, removeStorage }
}
