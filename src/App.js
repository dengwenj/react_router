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
        {/* 路由的模糊匹配和严格匹配， */}
        {/* 人家要的一样都不能少，而且顺序也不能换（模糊匹配） */}
        {/* 所输入的东西必须和要匹配的东西完美对应（严格匹配） */}
        {/* 严格匹配会导致二级路由匹配不上 */}
        <Route path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        {/* 这样的话就会一次往下找，找到了也会往下找 加了 Switch 的话找到了就不会往下找了 */}
        {/* <Route path="/home" component={About} />  */}
      </Switch>
    </div>
  )
}
