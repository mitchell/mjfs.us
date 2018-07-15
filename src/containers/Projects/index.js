// @flow
import React from "react"

import ClearButton from "../../components/ClearButton"

import "./index.css"

type Props = {}

class Projects extends React.PureComponent<Props> {
  render() {
    return (
      <div className="projects-container">
        <div>
          <h4>mjfs.us</h4>
          <p>
            This website has taken many forms over the years, as my frontend and
            design skills increase. It has been simple HTML, CSS, and JS, and a
            Ruby Sinatra web app. Currently it takes the form of a React.js app.
            I enjoy React.js (and similar frontend frameworks) as they can be
            used to make even the simplest projects modular and extensible.
          </p>
          <ClearButton href="https://github.com/mitchelljfs/react-website">
            Repository
          </ClearButton>
        </div>
        <div>
          <h4>lambdarouter</h4>
          <p>
            This package will become a fully featured AWS Lambda function
            router, able to respond to HTTP, Schedule, Cognito, and SNS events.
            It will also support middleware interfacing. So far it includes
            functionality for API Gateway. Check out the GoDoc Reference to see
            how to instantiate a router and create endpoints.
          </p>
          <ClearButton href="https://github.com/mitchelljfs/lambdarouter">
            Repository
          </ClearButton>
        </div>
        <div>
          <h4>destinate</h4>
          <p>
            destinate is a react-native, iOS (and Android) app. Its main
            objective is to suggest places or activities to the user based on
            their past choices. It utilizes a serverless backend, written in Go
            and hosted on AWS API Gateway/Lambda. It is still under development,
            as a side project of Arash Lari and I.
          </p>
          <ClearButton href="https://github.com/mitchelljfs/destinate">
            Repository
          </ClearButton>
        </div>
        <div>
          <h4>sys-mgmt</h4>
          <p>
            A minimal, cross-platform, unix-like-system management program. This
            program is designed to detect which programs are affiliated with the
            unix-like system, whether it be Debian or macOS. There are various
            shortcuts to common unix-like commands, such as update and upgrade
            (for package managers), another is poweroff or reboot.
          </p>
          <ClearButton href="https://github.com/mitchelljfs/sys-mgmt">
            Repository
          </ClearButton>
        </div>
      </div>
    )
  }
}

export default Projects
