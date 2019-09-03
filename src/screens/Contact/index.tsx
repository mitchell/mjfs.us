import React from "react"

import linkedIn from "../../images/In-2C-128px-TM.png"
import "./index.css"

export default class Contact extends React.PureComponent {
  public render() {
    return (
      <div className="contact-container">
        <p>m@mjfs.us</p>
        <a href="https://www.linkedin.com/in/mitchelljfsimon/">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
    )
  }
}
