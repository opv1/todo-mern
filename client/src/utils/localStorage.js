const nameStorage = 'todo-mern'

export const setStorage = (data) => {
  localStorage.setItem(nameStorage, JSON.stringify(data))
}

export const getStorage = () => {
  const data = localStorage.getItem(nameStorage)

  if (data !== null) return JSON.parse(data)
}

export const removeStorage = () => {
  localStorage.removeItem(nameStorage)
}
