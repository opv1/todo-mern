import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DashboardPage, TodosPages, TodoPage, AuthPage } from './pages/index'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/dashboard'>
          <DashboardPage />
        </Route>
        <Route path='/todos/'>
          <TodosPages />
        </Route>
        <Route path='/todo/:id'>
          <TodoPage />
        </Route>
        <Redirect to='/dashboard' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path='/'>
        <AuthPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
