import Home from "../pages/Home";
import About from "../pages/About";
import Message from "../pages/Message";
import News from "../pages/News";

const routes = [
    {
        path: '/home',
        // exact: true,
        component: Home,
        routes: [
            {
                path: '/home/message',
                component: Message,
            },
            {
                path: '/home/news',
                component: News
            }
        ]
    },
    {
        path: '/about',
        // exact: true,
        component: About,
    }
];

export default routes;