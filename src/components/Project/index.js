// @flow
import * as React from "react"

import ClearButton from "../../components/ClearButton"

import "./index.css"

type Badge = {
  imgUrl: string,
  linkUrl: string,
  alt: string
}

type Props = {
  title: string,
  children: string,
  repoUrl: string,
  badges: Array<Badge>
}

class Project extends React.PureComponent<Props> {
  renderBadges = (badges: Array<Badge>) => {
    return this.props.badges.map((badge, index) => (
      <a className="project-badge" href={badge.linkUrl} key={index}>
        <img src={badge.imgUrl} alt={badge.alt} />
      </a>
    ))
  }

  render() {
    return (
      <div className="project-container">
        <h4>{this.props.title}</h4>
        {this.renderBadges(this.props.badges)}
        <p>{this.props.children}</p>
        <ClearButton href={this.props.repoUrl}>Repository</ClearButton>
      </div>
    )
  }
}

export default Project
