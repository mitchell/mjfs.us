// @flow
import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "../containers/Home"
import Projects from "../containers/Projects"
import Experience from "../containers/Experience"
import Contact from "../containers/Contact"

type Props = {}

class Routes extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
    )
  }
}

export default Routes
