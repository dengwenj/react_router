import React, { Component } from 'react'

export default class News extends Component {
  state = {
    style: {
      backgroundColor: 'red',
      width: 500,
      height: 200,
    },
  }
  push = () => {
    console.log(this)
    this.props.history.push('/home/message/detail', 'state') // 这个第二个参数会传到 props的 location 里面的 state里面
    // 可以写成字符串也可以写成对象
    // this.props.history.push({
    //   pathname: '/home/message/detail',
    //   query: {
    //     name: 'xd',
    //   },
    // }) // 这个第二个参数会传到 props的 location 里面的 query 里面
    // this.props.history.push({
    //   pathname: '/home/message/detail',
    //   params: {
    //     name: 'xd',
    //   },
    // }) // 这个第二个参数会传到 props的 location 里面的 params 里面
    // this.props.history.push({
    //   pathname: '/home/message/detail',
    //   state: {
    //     name: 'xd',
    //   },
    // }) // 这个第二个参数会传到 props的 location 里面的 state 里面
  }
  replace = () => {
    const name = 'xd'
    const age = 18
    this.props.history.replace(`/home/message/detail/${name}/${age}`) // 就是说在 Link 标签里面怎写这里就怎么写
  }
  go = () => {
    const name = 'xd'
    const age = 18
    this.props.history.replace(`/home/message/detail?name=${name}&age=${age}`)
  }
  render() {
    const { style } = this.state
    return (
      <div style={style}>
        我是news组件，我是home的子组件
        <br />
        <button onClick={this.push}>push</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.replace}>replace</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}
