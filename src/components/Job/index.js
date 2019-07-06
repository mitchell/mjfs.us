// @flow
import * as React from 'react'

import SmallText from '../../components/SmallText'
import './index.css'

type Props = {
  title: string,
  company: string,
  timeSpan: string,
  bullets: Array<string>
}

class Experience extends React.PureComponent<Props> {
  listedBullets: Array<React.Element<string>>

  constructor (props: Props) {
    super(props)

    this.listedBullets = this.props.bullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ))
  }

  render () {
    return (
      <div className='job-container'>
        <div className='job-title'>{this.props.title}</div>
        <div className='job-company'>{this.props.company}</div>
        <SmallText>{this.props.timeSpan}</SmallText>
        <ul>{this.listedBullets}</ul>
      </div>
    )
  }
}

export default Experience
