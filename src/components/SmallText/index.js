import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

class SmallText extends React.PureComponent {
  render () {
    return (
      <p className='small-text'>{this.props.children}</p>
    )
  }
}

SmallText.propTypes = {
  children: PropTypes.string
}

export default SmallText
