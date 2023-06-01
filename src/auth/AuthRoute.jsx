import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Login from '../components/Login';
const AuthRoute = () => {
    const user = useSelector((state) => state.user_store.user);

    return (
            user ? <Outlet/> : <Login/>
    );
};

export default AuthRoute;