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

    if (isAuthenticated) {
      fetchLists()
      fetchTodos()
    }
    // eslint-disable-next-line
  }, [isAuthenticated])

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
