import React from 'react'
import { Link, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <Link to="/home">home路由</Link>
      <br />
      <Link to="/about">about路由</Link>
      <hr />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  )
}
