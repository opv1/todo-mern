import { useState, useCallback } from 'react'

const storageName = 'todo-mern'

export const useLocalStorage = () => {
  const [storageObject, setStorageObject] = useState({})

  const setStorage = useCallback((data) => {
    setStorageObject(data)
    localStorage.setItem(storageName, JSON.stringify(data))
  }, [])

  const getStorage = useCallback(() => {
    const data = localStorage.getItem(storageName)

    if (data !== null) return JSON.parse(data)
  }, [])

  const removeStorage = useCallback(() => {
    localStorage.removeItem(storageName)
  }, [])

  return { storageObject, setStorage, getStorage, removeStorage }
}
