import React from 'react';
import {
    Link,
    Route,
    Switch,
    Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

export default function App() {
    // 1 useHistory  就相当于 this.props.history  里面有 push 啊 replace 啊 go 啊等等 跳转路径的
    const history = useHistory();
    console.log(history);

    // 2 useLocation 当前路由就相当于 this.props.location 就是这个路径的一些信息 比如：路径是什么 有没有带参数过来 带的是什么参数(params state search),一般和useEffect一起用
    const location = useLocation();
    console.log(location);

    // 3 useParams 就是携带的 params 参数 比如：<Route path="/home/:id">home</Route>,这时地址栏路径就是：http://127.0.0.1/home/001 就可以用  const params =  useParams()    params 里面就有携带的参数了
    const params = useParams();
    console.log(params);

    // 4 useRouteMatch 返回当前 match 对象  cosnt match = useRouteMatch() 当前的这个
    const match = useRouteMatch();
    console.log(match);

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

                {/* Redirect 谁都匹配不上的时候就只听从 Redirect 的 他让你去哪就去哪 */}
                {/* 一上来是 / 这个路径，没有匹配上，然后他就会给你跳转到 about 路径 ，就匹配上了*/}
                {/* 从定向的意思，让你去哪就去哪 */}
                <Redirect to="/about" />
            </Switch>
        </div>
    );
}
