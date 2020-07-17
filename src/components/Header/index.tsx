import React, { PureComponent, ReactNode } from "react"

import SmallText from "../SmallText"

import "./index.css"

export default class Header extends PureComponent {
  public render(): ReactNode {
    return (
      <div className="header-container">
        <h2>Mitchell JF Simon</h2>
        <SmallText>Software & DevOps Engineer</SmallText>
      </div>
    )
  }
}
