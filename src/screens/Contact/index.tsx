import React, { PureComponent, ReactNode } from "react"

import linkedIn from "../../images/In-2C-128px-TM.png"
import "./index.css"

export default class Contact extends PureComponent {
  public render(): ReactNode {
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
