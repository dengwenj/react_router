import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      {/* 路由组件接收 3 个固定的属性 history location match 在 props 里面 */}
      <Link to="/home">home路由</Link>
      <br />
      <Link to="/about">about路由</Link>
      <hr />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        {/* 这样的话就会一次往下找，找到了也会往下找 加了 Switch 的话找到了就不会往下找了 */}
        {/* <Route path="/home" component={About} />  */}
      </Switch>
    </div>
  )
}
