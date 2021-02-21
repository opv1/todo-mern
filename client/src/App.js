import React, { useContext, useEffect } from 'react'
import { AppContext } from 'context/AppContext'
import {
  AlertComponent,
  ModalComponent,
  NavbarComponent,
} from 'components/index'

function App() {
  const {
    isAuthenticated,
    routes,
    checkAuth,
    fetchLists,
    fetchTodos,
  } = useContext(AppContext)

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchLists()
      fetchTodos()
    }
  }, [isAuthenticated, fetchLists, fetchTodos])

  return (
    <div className='app'>
      <AlertComponent />
      <ModalComponent />
      {isAuthenticated && <NavbarComponent />}
      {routes}
    </div>
  )
}

export default App
