import React, { PureComponent, ReactNode } from "react"

import "./index.css"

type Props = {
  href: string
  children: string
}

export default class ClearButton extends PureComponent<Props> {
  public render(): ReactNode {
    return (
      <a className="clear-button" href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}
