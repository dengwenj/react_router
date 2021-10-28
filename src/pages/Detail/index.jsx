import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log(this.props)
    // 通过 params 参数传递的
    // const { name, age } = this.props.match.params

    // 通过 search 传参
    const {
      location: { search },
    } = this.props
    const arr = search.slice(1).split('&')
    let arrValue = []
    arr.forEach((item) => {
      arrValue.push(item.split('=')[1])
    })

    return (
      <div>
        我是 Detail 组件，我是 message 的子组件
        <br />
        {/* 通过 params 参数传递的 */}
        {/* <div>我是父组件通过 params参数 传递过来的：{name}</div>
        <div>我是父组件通过 params参数 传递过来的：{age}</div> */}
        {/* 通过 search 传参 */}
        {arrValue.map((item) => {
          return <div key={item}>{item}</div>
        })}
      </div>
    )
  }
}
