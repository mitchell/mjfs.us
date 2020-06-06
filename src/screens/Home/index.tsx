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
          I am a software and dev-ops engineer, with most of my experience in
          web services, web apps, and mobile apps. I've designed, developed, and
          deployed mission critical web infrastructure and UI features for each
          company I've worked with. I love to architect and automate software
          projects. Tech that I love working with includes Elixir, Go,
          TypeScript, gRPC, Docker, and Terraform.
        </p>
        <p>
          My professional interests, aside from the above, include operating
          systems, virtualization, business development, and startup finance. My
          personal interests include music, skiing, camping, and travel.
        </p>
        <p>Thanks for reading.</p>

        <p className="signature">- Mitchell J. F. Simon, III</p>
      </div>
    )
  }
}
