import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
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
  const history = useHistory()
  const { ready } = useTypeSelector((state) => state.app)
  const { user } = useTypeSelector((state) => state.user)
  const {
    checkAuthUser,
    initialHistory,
    fetchingLists,
    fetchingTodos,
  } = useActions()

  const isAuth = !!user.accessToken
  const routes = Routes(isAuth)

  useEffect(() => {
    checkAuthUser()
    initialHistory(history)
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
