import React, { PureComponent, ReactNode } from "react"

import "./index.css"

export default class SmallText extends PureComponent {
  public render(): ReactNode {
    return <div className="small-text">{this.props.children}</div>
  }
}
