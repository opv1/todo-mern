import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as Pages from './pages/index'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/dashboard'>
          <Pages.Dashboard />
        </Route>
        <Route path='/todos/'>
          <Pages.Todos />
        </Route>
        <Route path='/todo/:id'>
          <Pages.Todo />
        </Route>
        <Redirect to='/dashboard' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Pages.Auth />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
