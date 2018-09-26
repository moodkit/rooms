import React, { Component } from 'react'
import moment from 'moment'
import './Home.css'
import cn from 'classnames'

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      now: moment(),
      schedule: [],
      isLoading: true,
      isAvailable: false,
      currentEvent: null,
      nextEvent: null,
      nextFreeSlot: null
    }
  }

  componentWillMount() {
    this.state.isLoading = false
  }

  componentWillUnmount() {
  }

  render() {
  const { name, now, isLoading, isAvailable, currentEvent, nextEvent, nextFreeSlot } = this.state

    return (
      !isLoading ?
        <div className={cn('Home')}>
          <span>Current time: {now.toString()}</span>
          <table>
            <tr>
              <th>Name</th>
              <th>Availablity</th>
            </tr>
            <tr>
              <td> <a href="/lei">Dijkstra</a></td>
              <td>Free</td>
            </tr>
            <tr>
              <td><a href="/ray">Conway</a></td>
              <td>Occupied</td>
            </tr>
          </table>
        </div>
          : null
    )
  }
}
