import React from "react"
import PropTypes from "prop-types"

import "./index.css"

class ClearButton extends React.PureComponent {
  render() {
    return (
      <a className="clear-button" href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

ClearButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string
}

export default ClearButton
