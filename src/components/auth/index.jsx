import React, {useState, useEffect} from 'react'
import PubSub from 'pubsub-js'
import { Navigate, useLocation } from 'react-router-dom'

export default function Auth () {
    const location = useLocation();
    const {pathname } = location;
    const [auth, setAuth] = useState(true);
    const onLoginPage = (pathname === "/login"); 

    useEffect( () => {
        let tokenA = PubSub.subscribe('LOGOUT', () => {
            setAuth(false);
        });
        let tokenB = PubSub.subscribe('LOGIN', () => {
            setAuth(true);
        });
        return () => {
            PubSub.unsubscribe(tokenA);
            PubSub.unsubscribe(tokenB);
        }
    },[]);

    return (
      <div>
            {(!auth && !onLoginPage) ? <Navigate to="/login" /> : null} 
            {(auth && onLoginPage) ? <Navigate to="/user" /> : null} 
      </div>
    )
}
