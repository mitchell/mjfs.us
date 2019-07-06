// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes, redirects } from './routes.js'

type Props = {}

class Routes extends React.Component<Props> {
  routes: Array<Route>
  redirects: Array<Route>

  constructor (props: Props) {
    super(props)

    this.routes = routes.map(route => (
      <Route
        key={route.name}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))

    this.redirects = redirects.map(route => (
      <Route key={route.path} path={route.path} render={route.func} />
    ))
  }

  render () {
    return (
      <Switch>
        {this.routes}
        {this.redirects}
      </Switch>
    )
  }
}

export default Routes
