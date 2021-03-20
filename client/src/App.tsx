import React, { useEffect } from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Routes from 'Routes'
import {
  LoaderComponent,
  AlertComponent,
  ModalComponent,
  NavbarComponent,
} from 'components/index'

const App: React.FC = () => {
  const { ready } = useTypeSelector((state) => state.app)
  const { user } = useTypeSelector((state) => state.user)
  const { checkAuthUser, fetchingLists, fetchingTodos } = useActions()

  const isAuth = !!user.accessToken
  const routes = Routes(isAuth)

  useEffect(() => {
    checkAuthUser()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
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
