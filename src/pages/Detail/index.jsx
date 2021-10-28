import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { name, age } = this.props.match.params
    return (
      <div>
        我是 Detail 组件，我是 message 的子组件
        <br />
        <div>我是父组件通过 params参数 传递过来的：{name}</div>
        <div>我是父组件通过 params参数 传递过来的：{age}</div>
      </div>
    )
  }
}
