import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from 'hooks/useActions'
import Routes from 'Routes'
import {
  LoaderComponent,
  AlertComponent,
  ModalComponent,
  NavbarComponent,
} from 'components/index'

const App = () => {
  const { ready } = useSelector((state) => state.app)
  const { user } = useSelector((state) => state.user)
  const { checkAuthUser, fetchingLists, fetchingTodos } = useActions()

  const isAuth = !!user.token
  const routes = Routes(isAuth)

  useEffect(() => {
    checkAuthUser()

    if (isAuth) {
      fetchingLists()
      fetchingTodos()
    }
    // eslint-disable-next-line
  }, [isAuth])

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
      {isAuth && <NavbarComponent />}
      {routes}
    </div>
  )
}

export default App
