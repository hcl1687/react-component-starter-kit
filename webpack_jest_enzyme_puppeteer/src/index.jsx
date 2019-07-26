import './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class SimpleComp extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired
  }

  render () {
    const { className, value } = this.props
    return <div className={classnames('simple', className)}>{value}</div>
  }
}
