import React, { PureComponent } from 'react'

import './index.css'

class ClearButton extends PureComponent {
  render () {
    return (
      <a className='clear-button' href={this.props.href}>{this.props.children}</a>
    )
  }
}

export default ClearButton
