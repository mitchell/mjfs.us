// @flow
import React from 'react'

import './index.css'

type Props = {
  children: string
}

class SmallText extends React.PureComponent<Props> {
  render () {
    return <div className='small-text'>{this.props.children}</div>
  }
}

export default SmallText
