// @flow
import * as React from "react"

import "./index.css"
import Job from "../../components/Job"

import jobs from "../../data/jobs.json"

type Props = {}

class Experience extends React.PureComponent<Props> {
  render() {
    let jobComponents = jobs.map(job => (
      <Job
        key={job.timeSpan}
        title={job.title}
        company={job.company}
        timeSpan={job.timeSpan}
        bullets={job.bullets}
      />
    ))

    return <div className="experience-container">{jobComponents}</div>
  }
}

export default Experience
