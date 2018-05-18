import React from 'react'

import './index.css'
import linkedIn from '../../images/In-2C-128px-TM.png'

class Contact extends React.PureComponent {
  render () {
    return (
      <div className='contact-container'>
        <p>m@mjfs.us</p>
        <a href='https://www.linkedin.com/in/mitchelljfsimon/'>
          <img src={linkedIn} alt='LinkedIn' />
        </a>
      </div>
    )
  }
}

export default Contact
