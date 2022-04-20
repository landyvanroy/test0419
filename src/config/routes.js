import Login from '../pages/login'
import User from '../pages/user'

const routes = [
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/user',
        element: <User/>
    }
];

export default routes;