import React, { useState } from 'react'

export default function About(props) {
  // console.log(props) // 路由组件的 三个属性在 props 里面
  const [state] = useState({
    height: 100,
    backgroundColor: 'pink',
  })
  return <div style={state}>我是about组件</div>
}
