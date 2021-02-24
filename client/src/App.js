import React, { useContext, useEffect } from 'react'
import { AppContext } from 'context/AppContext'
import {
  LoaderComponent,
  AlertComponent,
  ModalComponent,
  NavbarComponent,
} from 'components/index'

const App = () => {
  const {
    ready,
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

  if (!ready) {
    return (
      <div className='app' style={{ justifyContent: 'center' }}>
        <LoaderComponent />
      </div>
    )
  }

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
