import React from "react"
import PropTypes from "prop-types"

import "./index.css"

class SmallText extends React.PureComponent {
  render() {
    return <div className="small-text">{this.props.children}</div>
  }
}

SmallText.propTypes = {
  children: PropTypes.string
}

export default SmallText
