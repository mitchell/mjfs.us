import React from "react"

import SmallText from "../SmallText"

import "./index.css"

export default class Header extends React.PureComponent {
  public render() {
    return (
      <div className="header-container">
        <h2>Mitchell J. F. Simon</h2>
        <SmallText>
          Software engineer;&nbsp;
          <span style={{ display: "inline-block" }}>
            cloud-native web services and clients
          </span>
        </SmallText>
      </div>
    )
  }
}
