import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as Pages from 'pages/index'

const Routes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' exact component={Pages.Dashboard} />
        <Route path='/todos/' component={Pages.Todos} />
        <Route path='/todo/:id' component={Pages.Todo} />
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
