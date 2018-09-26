import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BookNow.css'

export default class BookNow extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 15};
  }

  static propTypes = {
    book: PropTypes.func,
  }

  picked(range) {
    this.state.minutes = range
  }

  render() {
    const { book } = this.props

    return (
        <div>
          <div className="RangeGroup">
            <button className={this.state.minutes === 15 ? 'Range selected': 'Range'} onClick={() => this.picked(15)}>{`15 minutes`}</button>
            <button className={this.state.minutes === 30 ? 'Range selected': 'Range'} onClick={() => this.picked(30)}>{`30 minutes`}</button>
            <button className={this.state.minutes === 60 ? 'Range selected': 'Range'} onClick={() => this.picked(60)}>{`60 minutes`}</button>
          </div>
          <button className="BookNow" onClick={() => book(this.state.minutes)}>{`Book now`}</button>
        </div>
    )
  }
}
