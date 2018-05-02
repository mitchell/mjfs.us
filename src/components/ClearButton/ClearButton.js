import React, { PureComponent } from 'react'

import './ClearButton.css'

class ClearButton extends PureComponent {
  render () {
    return (
      <a className='clearButton' href={this.props.href}>{this.props.children}</a>
    )
  }
}

export default ClearButton
