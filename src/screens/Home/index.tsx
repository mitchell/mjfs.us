import React, { PureComponent, ReactNode } from "react"

import profile from "../../images/profile.jpg"
import "./index.css"

export default class Home extends PureComponent {
  public render(): ReactNode {
    return (
      <div className="home-container">
        <img src={profile} alt="Profile" />

        <p>Hello and welcome,</p>
        <p>
          I am a software and dev-ops engineer with a focus on web services and
          applications. I love to architect and automate software projects. At
          each company I've been with, I've designed and deployed mission
          critical features and infrastructure. Throughout these experiences
          I've served as a mentor, team leader, and architectural guide.
        </p>
        <p>
          Tech that I love working with includes Elixir, Go, and most HashiCorp
          tools. My other professional interests include operating systems,
          virtualization, business development, and startup finance. My personal
          interests include skiing, music, and travel.
        </p>
        <p>Thanks for reading.</p>

        <p className="signature">- Mitchell JF Simon, III</p>
      </div>
    )
  }
}
