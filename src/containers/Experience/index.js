// @flow
import * as React from "react"

import "./index.css"
import JobComponent from "../../components/Job"

import jobsData from "../../data/jobs.json"

type Props = {}

type Job = {
  timeSpan: string,
  title: string,
  company: string,
  bullets: Array<string>
}

class Experience extends React.PureComponent<Props> {
  renderJobs = (jobs: Array<Job>) => {
    return jobs.map(job => (
      <JobComponent
        key={job.title}
        title={job.title}
        company={job.company}
        timeSpan={job.timeSpan}
        bullets={job.bullets}
      />
    ))
  }

  render() {
    return (
      <div className="experience-container">{this.renderJobs(jobsData)}</div>
    )
  }
}

export default Experience
