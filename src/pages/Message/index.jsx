import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from '../Detail'

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
          {/* 向路由组件传递 params 参数 */}
          {arr.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/home/message/detail/${item.name}/${item.age}`}
              >
                <br />
                姓名：{item.name}-年龄：{item.age}
              </Link>
            )
          })}
        </ul>
        {/* <Link to={`/home/message/detail/${}`}>我是detail组价</Link> */}
        <Route path="/home/message/detail/:name/:age" component={Detail} />
      </div>
    )
  }
}
