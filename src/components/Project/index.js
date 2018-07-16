// @flow
import React from "react"

import ClearButton from "../../components/ClearButton"

import "./index.css"

type Props = {
  title: string,
  children: string,
  repoUrl: string
}

class Project extends React.PureComponent<Props> {
  render() {
    return (
      <div className="project-container">
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
        <ClearButton href={this.props.repoUrl}>Repository</ClearButton>
      </div>
    )
  }
}

export default Project
