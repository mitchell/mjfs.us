import React, { PureComponent, ReactNode } from "react"

import Job from "../../components/Job"
import jobs from "../../data/jobs.json"
import "./index.css"

type JobData = {
  title: string
  company: string
  timeSpan: string
  bullets: string[]
}

export default class Experience extends PureComponent {
  public render(): ReactNode {
    return <div className="experience-container">{this.renderJobs()}</div>
  }

  private renderJobs(): ReactNode[] {
    return jobs.map((job: JobData) => (
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
