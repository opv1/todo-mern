import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as Pages from 'pages/index'

const Routes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' exact component={Pages.Dashboard} />
        <Route path='/todos/' exact component={Pages.Todos} />
        <Route path='/todos/:id' exact component={Pages.Todo} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact component={Pages.Auth} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
