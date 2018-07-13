// @flow
import React from "react"

import "./index.css"

type Props = {
  href: string,
  children: string
}

class ClearButton extends React.PureComponent<Props> {
  render() {
    return (
      <a className="clear-button" href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

export default ClearButton
