import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Loader, Navigation } from './components/index'

function App() {
  const { ready, isAuthenticated, routes } = useContext(AppContext)

  if (!ready) {
    return <Loader />
  }

  return (
    <div className='app'>
      {isAuthenticated && <Navigation />}
      {routes}
    </div>
  )
}

export default App
