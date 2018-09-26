import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Main.css'

export default class Main extends PureComponent {

  static propsTypes = {
    label: PropTypes.string,
    time: PropTypes.string,
    children: PropTypes.element
  }

  static defaultProps = {
    label: '',
    time: '',
    slug: 'Dijkstra'
  }

  render() {
    const { children, label, time, slug } = this.props

    return (
      <div className="Main">
        <div className="name">{slug}</div>
        <div className="label">{label}</div>
        <div className="time">{time}</div>
        { children }
      </div>
    )
  }
}
