import React from "react"

import "./index.css"

type Props = {
  href: string
  children: string
}

export default class ClearButton extends React.PureComponent<Props> {
  public render() {
    return (
      <a className="clear-button" href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}
