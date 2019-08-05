import './style/index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { __ } from './utils/i18n'
import classnames from 'classnames'

export default class SimpleComp extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired
  }

  render () {
    const { className, value } = this.props
    return <div className={classnames('simple', className)}>
      <div className='title'>{__('title')}</div>
      <div className='content'>{value}</div>
    </div>
  }
}
