import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import {
  AlertComponent,
  LoaderComponent,
  NavbarComponent,
  ModalComponent,
} from './components/index'

function App() {
  const { ready, isAuthenticated, routes, fetchLists, fetchTodos } = useContext(
    AppContext
  )

  useEffect(() => {
    if (isAuthenticated) {
      fetchLists()
      fetchTodos()
    }
  }, [isAuthenticated, fetchLists, fetchTodos])

  if (!ready) {
    return <LoaderComponent />
  }

  return (
    <div className='app'>
      <ModalComponent />
      {isAuthenticated && <NavbarComponent />}
      {routes}
      <AlertComponent />
    </div>
  )
}

export default App
