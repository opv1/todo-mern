import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import {
  AlertComponent,
  LoaderComponent,
  NavbarComponent,
  ModalComponent,
} from './components/index'

function App() {
  const { ready, isAuthenticated, routes } = useContext(AppContext)

  if (!ready) {
    return <LoaderComponent />
  }

  return (
    <div className='app'>
      {isAuthenticated && <NavbarComponent />}
      <AlertComponent />
      {routes}
      <ModalComponent />
    </div>
  )
}

export default App
