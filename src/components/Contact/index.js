// @flow
import React from "react"

import "./index.css"
import linkedIn from "../../images/In-2C-128px-TM.png"

type Props = {}

class Contact extends React.PureComponent<Props> {
  render() {
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

export default Contact
