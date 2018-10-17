// @flow
import React from "react"

import "./index.css"
import profile from "../../images/profile.jpg"

type Props = {}

class Home extends React.PureComponent<Props> {
  render() {
    return (
      <div className="home-container">
        <img src={profile} alt="Profile" />
        <p>Hello and welcome,</p>
        <p>
          My name is Mitchell Simon. I am the Lead Backend Engineer at
          Hypremium. Where I lead the architecture of and maintain our
          platform&#39;s backend API. I also offer my skills as a consulting web
          & cloud developer.
        </p>
        <p>
          My professional interests include web development (with an emphasis on
          backend), software architecture, system administration, cloud
          architecture, software engineering, cybersecurity, and business
          administration. My personal interests include music performance,
          skiing, and politics.
        </p>
        <p>
          Thank you for reading my quick bio. If you would like to contact me
          visit the contact page for all of your options.
        </p>
        <p className="signature">- Mitchell J. F. Simon, III</p>
      </div>
    )
  }
}

export default Home
