// @flow
import React from "react"

import "./index.css"

export default class SmallText extends React.PureComponent {
  public render() {
    return <div className="small-text">{this.props.children}</div>
  }
}
