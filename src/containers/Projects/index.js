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
          repoUrl="https://github.com/mitchelljfs/mjfs.us"
          badges={[
            {
              imgUrl:
                "https://travis-ci.org/mitchelljfs/mjfs.us.svg?branch=master",
              linkUrl: "https://travis-ci.org/mitchelljfs/mjfs.us",
              alt: "Build Status"
            },
            {
              imgUrl:
                "https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat",
              linkUrl: "https://github.com/prettier/prettier",
              alt: "Prettier Style"
            }
          ]}
        >
          My personal site has taken the form of a plain HTML site and a Ruby
          app, but it currently takes the form of a React.js app. It was
          developed using Eslint, Prettier and Flow. It is hosted in multiple
          locations around the world, using AWS S3 and Cloudfront. It is also
          continously deployed using Travis CI.
        </Project>

        <Project
          title="lambdarouter"
          repoUrl="https://github.com/mitchelljfs/lambdarouter"
          badges={[
            {
              imgUrl:
                "https://godoc.org/github.com/mitchelljfs/lambdarouter?status.svg",
              linkUrl: "https://godoc.org/github.com/mitchelljfs/lambdarouter",
              alt: "Go Doc"
            },
            {
              imgUrl:
                "https://travis-ci.org/mitchelljfs/lambdarouter.svg?branch=master",
              linkUrl: "https://travis-ci.org/mitchelljfs/lambdarouter",
              alt: "Build Status"
            },
            {
              imgUrl:
                "https://coveralls.io/repos/github/mitchelljfs/lambdarouter/badge.svg?branch=master",
              linkUrl:
                "https://coveralls.io/github/mitchelljfs/lambdarouter?branch=master",
              alt: "Code Coverage"
            },
            {
              imgUrl:
                "https://goreportcard.com/badge/github.com/mitchelljfs/lambdarouter",
              linkUrl:
                "https://goreportcard.com/report/github.com/mitchelljfs/lambdarouter",
              alt: "Go Reportcard"
            }
          ]}
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
          badges={[]}
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
          badges={[]}
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
