import React, { PureComponent, ReactNode } from "react"

import SmallText from "../../components/SmallText"
import "./index.css"

type Props = {
  title: string
  company: string
  timeSpan: string
  bullets: string[]
}

export default class Experience extends PureComponent<Props> {
  public render(): ReactNode {
    return (
      <div className="job-container">
        <div className="job-title">{this.props.title}</div>
        <div className="job-company">{this.props.company}</div>
        <SmallText>{this.props.timeSpan}</SmallText>
        <ul>{this.renderBullets()}</ul>
      </div>
    )
  }

  private renderBullets(): ReactNode[] {
    return this.props.bullets.map((bullet: string, index: number) => (
      <li key={index}>{bullet}</li>
    ))
  }
}
