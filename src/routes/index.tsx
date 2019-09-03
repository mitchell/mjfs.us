import React from "react"
import { Route, Switch } from "react-router-dom"

import { redirects, routes } from "./routes"

export default class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        {this.renderRoutes()}
        {this.renderRedirects()}
      </Switch>
    )
  }

  private renderRoutes() {
    return routes.map(route => (
      <Route
        key={route.name}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))
  }

  private renderRedirects() {
    return redirects.map(route => (
      <Route key={route.path} path={route.path} render={route.func} />
    ))
  }
}
