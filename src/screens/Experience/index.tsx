import * as React from "react"

import Job from "../../components/Job"
import jobsData from "../../data/jobs.json"
import "./index.css"

type JobData = {
  title: string
  company: string
  timeSpan: string
  bullets: string[]
}

export default class Experience extends React.PureComponent {
  public render() {
    return (
      <div className="experience-container">{this.renderJobs(jobsData)}</div>
    )
  }

  private renderJobs(jobs: JobData[]) {
    return jobs.map(job => (
      <Job
        key={job.title}
        title={job.title}
        company={job.company}
        timeSpan={job.timeSpan}
        bullets={job.bullets}
      />
    ))
  }
}
