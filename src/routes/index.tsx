import React, { Component, ReactNode } from "react"
import { Route as RouteComponent, Switch } from "react-router-dom"

import { Redirect, redirects, Route, routes } from "./routes"

export default class Routes extends Component {
  public render(): ReactNode {
    return (
      <Switch>
        {this.renderRoutes()}
        {this.renderRedirects()}
      </Switch>
    )
  }

  private renderRoutes(): ReactNode[] {
    return routes.map((route: Route) => (
      <RouteComponent
        key={route.name}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))
  }

  private renderRedirects(): ReactNode[] {
    return redirects.map((route: Redirect) => (
      <RouteComponent key={route.path} path={route.path} render={route.func} />
    ))
  }
}
