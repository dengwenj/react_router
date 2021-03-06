import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from '../../router';

// import Message from '../Message';
// import News from '../News';

export default class Home extends Component {
    state = {
        style: {
            height: 500,
            backgroundColor: 'skyblue',
        },
    };
    render() {
        const branch = matchRoutes(routes, '/home/message');
        console.log(branch);
        console.log(this.props);
        const { style } = this.state;
        return (
            <div style={style}>
                我是 home 组件 <br />
                <Link to="/home/news">我是 news 组件</Link>
                <br />
                <Link to="/home/message">我是 message 组件 </Link>
                {/* 嵌套路由的使用 */}
                {/* 1 注册子路由时要写上父路由的 path 值 */}
                {/* 2 路由的匹配是按照注册路由的顺序进行的 */}
                {/* 重点！！！！！！！！！！！！！每次都要重新从一级路由匹配！！！！！！！！！！！ */}
                {/* <Route path="/home/news" component={News} /> */}
                {/* <Route path="/home/message" component={Message} /> */}

                {/* 可以这样 */}
                {renderRoutes(this.props.route.routes, { name: 'dwj', age: 18 })}
            </div>
        );
    }
}
