import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Message from '../Message'
import News from '../News'

export default class Home extends Component {
  state = {
    style: {
      height: 100,
      backgroundColor: 'skyblue',
    },
  }
  render() {
    // console.log(this)
    const { style } = this.state
    return (
      <div style={style}>
        我是 home 组件 <br />
        <Link to="/home/news">我是 news 组件</Link>
        <br />
        <Link to="/home/message">我是 message 组件 </Link>
        <Route path="/home/news" component={News} />
        <Route path="/home/message" component={Message} />
      </div>
    )
  }
}
