import React, { PureComponent, ReactNode } from "react"

import ClearButton from "../../components/ClearButton"

import "./index.css"

type Badge = {
  imgUrl: string
  linkUrl: string
  alt: string
}

type Props = {
  title: string
  children: string
  repoUrl: string
  badges: Badge[]
}

export default class Project extends PureComponent<Props> {
  public render(): ReactNode {
    return (
      <div className="project-container">
        <h4>{this.props.title}</h4>
        {this.renderBadges(this.props.badges)}
        <p>{this.props.children}</p>
        <ClearButton href={this.props.repoUrl}>Repository</ClearButton>
      </div>
    )
  }

  private renderBadges(badges: Badge[]): ReactNode[] {
    return badges.map((badge: Badge, index: number) => (
      <a className="project-badge" href={badge.linkUrl} key={index}>
        <img src={badge.imgUrl} alt={badge.alt} />
      </a>
    ))
  }
}
