// @flow
import React from "react"

import SmallText from "../SmallText"

import "./index.css"

type Props = {}

class Header extends React.PureComponent<Props> {
  render() {
    return (
      <div className="header-container">
        <h2>Mitchell J. F. Simon</h2>
        <SmallText>Backend Engineer, TV Time</SmallText>
      </div>
    )
  }
}

export default Header
