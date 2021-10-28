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
          {/* 向路由组件传递 params 参数
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
          })} */}

          {/* search 参数，就类似 query 参数，在 Link 这里动下就行了，注册路由哪里不用动 */}
          {/* {arr.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/home/message/detail?name=${item.name}&age=${item.age}`}
              >
                <br />
                姓名：{item.name}-年龄：{item.age}
              </Link>
            )
          })} */}

          {/* state 参数，state参数的有点就是路径里面没有任何的提示是偷偷的把数据传递过去的 是一个对象*/}
          {arr.map((item) => {
            return (
              <Link
                key={item.id}
                to={{
                  pathname: '/home/message/detail',
                  state: {
                    name: item.name,
                    age: item.age,
                  },
                }}
              >
                <br />
                姓名：{item.name}-年龄：{item.age}
              </Link>
            )
          })}
        </ul>
        {/* 注册路由 */}
        {/* params 传参 */}
        {/* <Route path="/home/message/detail/:name/:age" component={Detail} /> */}
        {/* search 传参 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state 参数 */}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    )
  }
}
