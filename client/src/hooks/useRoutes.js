import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DashboardPage, TodosPages, TodoPage, AuthPage } from '../pages/index'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/dashboard' exact component={DashboardPage} />
        <Route path='/todos/' component={TodosPages} />
        <Route path='/todo/:id' component={TodoPage} />
        <Redirect to='/dashboard' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact component={AuthPage} />
      <Redirect to='/' />
    </Switch>
  )
}
