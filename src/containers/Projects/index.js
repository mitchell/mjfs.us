// @flow
import React from "react"

import Project from "../../components/Project"

import "./index.css"

type Props = {}

class Projects extends React.PureComponent<Props> {
  render() {
    return (
      <div className="projects-container">
        <Project
          title="mjfs.us"
          repoUrl="https://github.com/mitchelljfs/react-website"
        >
          This website has taken many forms over the years, as my frontend and
          design skills increase. It has been simple HTML, CSS, and JS, and a
          Ruby Sinatra web app. Currently it takes the form of a React.js app. I
          enjoy React.js (and similar frontend frameworks) as they can be used
          to make even the simplest projects modular and extensible.
        </Project>

        <Project
          title="lambdarouter"
          repoUrl="https://github.com/mitchelljfs/lambdarouter"
        >
          This package will become a fully featured AWS Lambda function router,
          able to respond to HTTP, Schedule, Cognito, and SNS events. It will
          also support middleware interfacing. So far it includes functionality
          for API Gateway. Check out the GoDoc Reference to see how to
          instantiate a router and create endpoints.
        </Project>

        <Project
          title="destinate"
          repoUrl="https://github.com/mitchelljfs/destinate"
        >
          destinate is a react-native, iOS (and Android) app. Its main objective
          is to suggest places or activities to the user based on their past
          choices. It utilizes a serverless backend, written in Go and hosted on
          AWS API Gateway/Lambda. It is still under development, as a side
          project of Arash Lari and I.
        </Project>

        <Project
          title="sys-mgmt"
          repoUrl="https://github.com/mitchelljfs/sys-mgmt"
        >
          A minimal, cross-platform, unix-like-system management program. This
          program is designed to detect which programs are affiliated with the
          unix-like system, whether it be Debian or macOS. There are various
          shortcuts to common unix-like commands, such as update and upgrade
          (for package managers), another is poweroff or reboot.
        </Project>
      </div>
    )
  }
}

export default Projects
