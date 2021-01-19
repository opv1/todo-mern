import { createContext } from 'react'

function noop() {}

export const AppContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})
