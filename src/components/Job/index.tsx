import * as React from "react"

import SmallText from "../../components/SmallText"
import "./index.css"

type Props = {
  title: string
  company: string
  timeSpan: string
  bullets: string[]
}

export default class Experience extends React.PureComponent<Props> {
  public render() {
    return (
      <div className="job-container">
        <div className="job-title">{this.props.title}</div>
        <div className="job-company">{this.props.company}</div>
        <SmallText>{this.props.timeSpan}</SmallText>
        <ul>{this.renderBullets()}</ul>
      </div>
    )
  }
  private renderBullets() {
    return this.props.bullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ))
  }
}
