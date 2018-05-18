import React from 'react'

import SmallText from '../../components/SmallText'
import './index.css'

class Experience extends React.PureComponent {
  render () {
    return (
      <div className='experience-container'>
        <div>
          <div className='experience-title'>Lead Backend Engineer</div>
          <div className='experience-company'>Hypremium.</div>
          <SmallText className='experience-smalltext'>May 2018 - Present</SmallText>
          <ul>
            <li>Architect all new backend microservices using Serverless, AWS API Gateway/Lambda/more, and Golang.</li>
            <li>Lead backend development team in an Agile (scrumban) environment.</li>
            <li>Monitor and maintain all stages of hosted microservices.</li>
          </ul>
        </div>
        <div>
          <div className='experience-title'>DevOps Engineer</div>
          <div className='experience-company'>Hypremium.</div>
          <SmallText className='experience-smalltext'>January 2018 - May 2018, 5 Months</SmallText>
          <ul>
            <li>Maintain & migrate Ruby on Rails API and backend application.</li>
            <li>Oversee and assist with continuous integration for backend development.</li>
          </ul>
        </div>
        <div>
          <div className='experience-title'>Sales Associate</div>
          <div className='experience-company'>J. Crew</div>
          <SmallText className='experience-smalltext'>October 2015 - January 2017, 1 Year 5 Months</SmallText>
          <ul>
            <li>Knowing the products and what products best suit the customers’ needs.</li>
            <li>Helping the customer with any manner of purchase, exchange, or return.</li>
          </ul>
        </div>
        <div>
          <div className='experience-title'>Intern</div>
          <div className='experience-company'>Zumasys</div>
          <SmallText className='experience-smalltext'>June 2015 - August 2015, 3 Months</SmallText>
          <ul>
            <li>Main goal was to learn as much about the business and their technology as possible</li>
            <li>Management and organization of customer correspondence.</li>
            <li>Auditing of server space.</li>
            <li>Dispatching and filtering ticketing system and office computer assistance.</li>
          </ul>
        </div>
        <div>
          <div className='experience-title'>User Support Technician</div>
          <div className='experience-company'>Point Loma Nazarene University, ITS Deptarment</div>
          <SmallText className='experience-smalltext'>Jan 2015 - May 2015, 5 Months</SmallText>
          <ul>
            <li>First in contact for email hotline, second in contact for phones.</li>
            <li>Work with customers via email, phone, remote control, and in person.</li>
            <li>Computer diagnosis, repair, and preparation for customer.</li>
            <li>Special projects.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Experience
