import React, { Component } from 'react'
import moment from 'moment'
import './Home.css'
import cn from 'classnames'
const rooms = require('../rooms')

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      now: moment(),
      schedule: [],
      isLoading: true,
    }
  }

  componentWillMount() {
    this.state.isLoading = false
  }

  componentWillUnmount() {
  }

  render() {
    const { name, now, isLoading } = this.state
    let content = []
    for (let key in rooms) {
      content.push(<tr key={key}>
        <td className={cn('name')}><a href={`/${key.toString()}`}>{key.toString()}</a></td>
        <td className={cn('floor')}>{rooms[key].floor}</td>
        <td className={cn('size')}>{rooms[key].size}</td>
        <td className={cn('whiteboard')}>{rooms[key].whiteboard === true ? <p>&#10004;</p> : null}</td>
        <td className={cn('availability')}>Free</td>
        <td className={cn('note')}>{rooms[key].note}</td>
      </tr>)
    }
    return (
      !isLoading ?
        <div className={cn('Home')}>
          <table className={cn('Table')} align="left">
            <thead className={cn('Head')}>
            <tr>
              <th>Name</th>
              <th>Floor</th>
              <th>Size</th>
              <th>Whiteboard</th>
              <th>Availablity</th>
              <th>Note</th>
            </tr>
            </thead>
            <tbody>
            {content}
            </tbody>
          </table>
        </div>
          : null
    )
  }
}
