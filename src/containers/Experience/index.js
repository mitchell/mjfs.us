// @flow
import React from "react"

import "./index.css"
import Job from "../../components/Job"

type Props = {}

class Experience extends React.PureComponent<Props> {
  render() {
    return (
      <div className="experience-container">
        <Job
          title="Lead Backend Engineer"
          company="Hypremium."
          timeSpan="May 2018 - Present"
          bullets={[
            "Architect all new backend microservices using Serverless, AWS API Gateway/Lambda/more, and Golang.",
            "Lead backend development team in an Agile (scrumban) environment.",
            "Monitor and maintain all stages of hosted microservices."
          ]}
        />
        <Job
          title="DevOps Engineer"
          company="Hypremium."
          timeSpan="January 2018 - May 2018, 5 Months"
          bullets={[
            "Maintain & migrate Ruby on Rails API and backend application.",
            "Oversee and assist with continuous integration for backend development."
          ]}
        />
        <Job
          title="Sales Associate"
          company="J. Crew"
          timeSpan="October 2015 - January 2017, 1 Year 5 Months"
          bullets={[
            "Knowing the products and what products best suit the customers' needs.",
            "Helping the customer with any manner of purchase, exchange, or return."
          ]}
        />
        <Job
          title="Intern"
          company="Zumasys"
          timeSpan="June 2015 - August 2015, 3 Months"
          bullets={[
            "Main goal was to learn as much about the business and their technology as possible.",
            "Management and organization of customer correspondence.",
            "Auditing of server space.",
            "Dispatching and filtering ticketing system and office computer assistance."
          ]}
        />
        <Job
          title="User Support Technician"
          company="Point Loma Nazarene University, ITS Department"
          timeSpan="January 2015 - May 2015, 5 Months"
          bullets={[
            "First in contact for email hotline, second in contact for phones.",
            "Work with customers via email, phone, remote control, and in person.",
            "Computer diagnosis, repair, and preparation for customer.",
            "Special projects."
          ]}
        />
      </div>
    )
  }
}

export default Experience
