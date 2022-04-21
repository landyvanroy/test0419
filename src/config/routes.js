import {Navigate} from 'react-router-dom'
import Login from '../pages/login'
import User from '../pages/user'
import Repository from '../pages/repository'
import Members from '../pages/members'

const routes = [
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/user',
        element: <User/>
    },
    {
        path:'/repository',
        element: <Repository />
    },
    {
        path:'/members',
        element: <Members />
    },
    {
        path:'/',
        element: <Navigate to="/user"/>
    }
];
export default  routes;