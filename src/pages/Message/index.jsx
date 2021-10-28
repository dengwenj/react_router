import React, { Component } from 'react'

export default class Message extends Component {
  state = {
    arr: [
      { id: '001', name: 'xiaodeng', age: 18 },
      { id: '002', name: 'xd', age: 20 },
      { id: '003', name: 'zhangsan', age: 28 },
    ],
    style: {
      width: 500,
      height: 200,
      backgroundColor: 'pink',
    },
  }
  render() {
    const { arr, style } = this.state
    return (
      <div style={style}>
        我是message组件，我是home的子组件
        <ul>
          {arr.map((item) => {
            return (
              <li key={item.id}>
                姓名：{item.name}-年龄：{item.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
