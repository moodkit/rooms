import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import './index.css'

render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:room" component={App} />
    </div>
  </BrowserRouter>
), document.querySelector('#app'))
