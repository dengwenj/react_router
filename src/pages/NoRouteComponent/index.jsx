import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NoRouteComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        我是about子组件，我不是路由组件NoRouteComponent，但是我可以有路由组件里面props的三大属性，加上
        withRouter(NoRouteComponent)这个函数，这样即使我不是路由组件也拥有路由组件props里面的三大属性
      </div>
    )
  }
}
export default withRouter(NoRouteComponent)
