import React from 'react'
import { useState } from 'react'

export default function Home() {
  const [state] = useState({
    height: 100,
    backgroundColor: 'skyblue',
  })

  return <div style={state}>我是 home 组件</div>
}
