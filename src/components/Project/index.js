// @flow
import * as React from "react"

import ClearButton from "../../components/ClearButton"

import "./index.css"

type Props = {
  title: string,
  children: string,
  repoUrl: string,
  badges: Array<{ imgUrl: string, linkUrl: string, alt: string }>
}

class Project extends React.PureComponent<Props> {
  badges: Array<React.Element<string>>

  constructor(props: Props) {
    super(props)

    this.badges = this.props.badges.map((badge, index) => (
      <a className="project-badge" href={badge.linkUrl} key={index}>
        <img src={badge.imgUrl} alt={badge.alt} />
      </a>
    ))
  }

  render() {
    return (
      <div className="project-container">
        <h4>{this.props.title}</h4>
        {this.badges}
        <p>{this.props.children}</p>
        <ClearButton href={this.props.repoUrl}>Repository</ClearButton>
      </div>
    )
  }
}

export default Project
